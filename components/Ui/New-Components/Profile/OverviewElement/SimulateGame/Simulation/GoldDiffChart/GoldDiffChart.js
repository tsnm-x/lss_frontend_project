import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const GoldDiffChart = (props) => {
	console.log(props.goldFrames);

	class Chart {
		constructor(container) {
			this.container = container;
			this.xValueKey;
			this.yValueKey;
			this.dimensions = {};
			this.svg;
			this.rangeX;
			this.rangeY;
			this.maxYvalue;
			this.minYvalue;
			this.maxYabsValue;
			this.line;
			this.area;
		}

		setChartDataFields(xValue, yValue) {
			this.xValueKey = xValue;
			this.yValueKey = yValue;
		}

		gradPoints(max = this.maxYvalue, min = this.minYvalue) {
			let p = (max - min) / 100;
			let p2 = 80,
				p3 = 100;
			if (min < 0) {
				p2 = Math.round((max * 0.8) / p);
				p3 = 100 - Math.round((Math.abs(min) * 0.8) / p);
			}
			return [p2, p3, Math.round(max / p)];
		}

		setdimensions(top, right, bottom, left) {
			this.dimensions.width =
				this.container._groups[0][0].clientWidth - left - right;
			this.dimensions.height =
				this.container._groups[0][0].clientHeight - top - bottom;
			this.dimensions.margins = [top, right, bottom, left];
		}

		setSVG() {
			this.svg = d3
				.select(this.container._groups[0][0])
				.append("svg")
				.attr(
					"width",
					this.dimensions.width +
						this.dimensions.margins[3] +
						this.dimensions.margins[1]
				)
				.attr(
					"height",
					this.dimensions.height +
						this.dimensions.margins[0] +
						this.dimensions.margins[2]
				)
				.append("g")
				.attr(
					"transform",
					"translate(" +
						this.dimensions.margins[3] +
						"," +
						this.dimensions.margins[0] +
						")"
				);
		}

		setRanges(
			maxWidth = this.dimensions.width,
			maxHeight = this.dimensions.height
		) {
			this.rangeX = d3.scaleLinear().range([0, maxWidth]);
			this.rangeY = d3.scaleLinear().range([maxHeight, 0]);
		}

		scaleRanges(data, xValue = this.xValueKey, yValue = this.yValueKey) {
			this.rangeX.domain([0, d3.max(data, (d) => d[xValue])]);
			this.rangeY.domain([-this.maxYabsValue * 1.2, 1.2 * this.maxYabsValue]);
		}

		createArea(xValue = this.xValueKey, yValue = this.yValueKey) {
			this.area = d3
				.area()
				.curve(d3.curveCardinal)
				.x((d) => this.rangeX(d[xValue]))
				.y0(this.rangeY(0))
				.y1((d) => this.rangeY(d[yValue]));
		}

		setDataValues(data, xValue = this.xValueKey, yValue = this.yValueKey) {
			this.maxYvalue = +d3.max(data, (d) => d[yValue]);
			this.minYvalue = +d3.min(data, (d) => d[yValue]);
			this.maxYabsValue = Math.max(
				Math.abs(this.maxYvalue),
				Math.abs(this.minYvalue)
			);
		}

		createLine(xValue = this.xValueKey, yValue = this.yValueKey) {
			this.line = d3
				.line()
				.curve(d3.curveCardinal)
				.x((d) => this.rangeX(d[xValue]))
				.y((d) => this.rangeY(d[yValue]));
		}

		appendZeroAxis() {
			this.svg
				.append("line")
				.attr("class", "zero-axis")
				.style("stroke-dasharray", "5, 5")
				.attr("x1", 0)
				.attr("y1", this.rangeY(0))
				.attr("x2", this.dimensions.width)
				.attr("y2", this.rangeY(0));
		}

		appendRightBorder() {
			this.svg
				.append("line")
				.attr("class", "right-border")
				.style("stroke-dasharray", "3, 2")
				.attr("x1", this.dimensions.width)
				.attr("y1", 0)
				.attr("x2", this.dimensions.width)
				.attr("y2", this.dimensions.height);
		}

		appendAxisTitles(yTitle) {
			this.svg
				.append("text")
				.attr("class", "axis-unit")
				.attr(
					"transform",
					"translate(" + (-this.dimensions.margins[3] + 5) + ",15)"
				)
				.text(yTitle);
		}

		appendLine(data, line) {
			this.svg
				.append("path")
				.data([data])
				.attr("class", "line")
				.attr("stroke", "url(#gradientLine)")
				.attr("d", line);
		}

		appendArea(data, area) {
			this.svg
				.append("path")
				.data([data])
				.attr("class", "area")
				.attr("fill", "url(#gradient)")
				.attr("d", area);
		}

		defineGrad() {
			d3.select("svg")
				.append("defs")
				.append("linearGradient")
				.attr("id", "gradient")
				.attr("x1", 0)
				.attr("x2", 0)
				.attr("y1", 0)
				.attr("y2", 1)
				.selectAll("stop")
				.data([
					{ offset: 0, stopColor: "blue", opacity: 1 },
					{ offset: this.gradPoints()[0], stopColor: "blue", opacity: 0 },
					{ offset: this.gradPoints()[1], stopColor: "red", opacity: 0 },
					{ offset: 100, stopColor: "red", opacity: 1 },
				])
				.enter()
				.append("stop")
				.attr("offset", function (d) {
					return d.offset + "%";
				})
				.attr("stop-color", function (d) {
					return d.stopColor;
				})
				.attr("stop-opacity", function (d) {
					return d.opacity;
				});

			d3.select("svg")
				.append("defs")
				.append("linearGradient")
				.attr("id", "gradientLine")
				.attr("x1", 0)
				.attr("x2", 0)
				.attr("y1", 0)
				.attr("y2", 1)
				.selectAll("stop")
				.data([
					{ offset: 0, color: "blue" },
					{ offset: this.gradPoints()[2], color: "blue" },
					{ offset: this.gradPoints()[2], color: "red" },
					{ offset: 100, color: "red" },
				])
				.enter()
				.append("stop")
				.attr("offset", function (d) {
					return d.offset + "%";
				})
				.attr("stop-color", function (d) {
					return d.color;
				});
		}

		appendAxis(xRange, yRange) {
			this.svg
				.append("g")
				.attr("transform", "translate(0," + this.dimensions.height + ")")
				.call(
					d3
						.axisBottom(xRange)
						.tickFormat((d) => d3.timeFormat("%H:%M")(d3.timeParse("%M")(d)))
				);

			this.svg.append("g").call(
				d3.axisLeft(yRange).tickFormat((d) => {
					d = Math.round(d / 100) / 10;
					let pre = d > 0 ? "+" : "";
					return pre + d + "K";
				})
			);
		}

		draw(data) {
			this.setSVG();
			this.setDataValues(data);
			this.setRanges();
			this.scaleRanges(data);
			this.defineGrad();
			this.createArea();
			this.createLine();
			this.appendAxis(this.rangeX, this.rangeY);
			this.appendZeroAxis();
			this.appendRightBorder();
			this.appendAxisTitles("Gold");
			this.appendArea(data, this.area);
			this.appendLine(data, this.line);
		}
	}
	const ref = useRef();

	// let goldChart = d3.select(ref.current);
	let goldChart;

	useEffect(() => {
		if (ref.current) {
			// let goldChart = new Chart(d3.select(ref.current));
			// goldChart = new Chart(goldChart);

			if (ref.current) {
				goldChart = new Chart(d3.select(ref.current));
				goldChart.setChartDataFields("Time", "goldDifference");
				goldChart.setdimensions(20, 20, 30, 40);
				goldChart.draw(props.goldFrames);
			}

			// goldChart.append("circle").attr("cx", 150).attr("cy", 70).attr("r", 50);
		}
	}, [props.goldFrames]);

	return (
		<div className={`w-[782px] h-[452px] relative`}>
			<div ref={ref} className=" w-[1000px] h-[600px]" />
		</div>
	);
};

export default GoldDiffChart;
