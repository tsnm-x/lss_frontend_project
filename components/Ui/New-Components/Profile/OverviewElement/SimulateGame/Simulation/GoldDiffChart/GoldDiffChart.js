import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./GoldDiffChart.module.css";

const GoldDiffChart = (props) => {
	class Chart {
		constructor(container, margins) {
			this.dimensions = this.setdimensions(container, ...margins);
			this.svg = this.setSVG(container);
			this.xValueKey;
			this.yValueKey;
			this.xValueName;
			this.yValueName;
			this.rangeX;
			this.rangeY;
			this.maxYvalue;
			this.minYvalue;
			this.maxYabsValue;
			this.area;
			this.line;
			this.tooltip = {};
			this.sliderCallFunction;
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

		bisect(data, xValue, xValueKey = this.xValueKey) {
			return data[d3.bisector((d) => d[xValueKey]).center(data, xValue)];
		}

		setChartDataFields(xKey, yKey, xName, yName) {
			this.xValueKey = xKey;
			this.yValueKey = yKey;
			this.xValueName = xName;
			this.yValueName = yName;
		}

		setSliderCallFunction(func) {
			this.sliderCallFunction = func;
		}

		setdimensions(container, top, right, bottom, left) {
			return {
				width: container.clientWidth - left - right,
				height: container.clientHeight - top - bottom,
				margins: [top, right, bottom, left],
			};
		}

		setSVG(container) {
			// console.log(container);
			return d3
				.select(container)
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

		setDataValues(data, xValue = this.xValueKey, yValue = this.yValueKey) {
			this.maxYvalue = +d3.max(data, (d) => d[yValue]);
			this.minYvalue = +d3.min(data, (d) => d[yValue]);
			this.maxYabsValue = Math.max(
				Math.abs(this.maxYvalue),
				Math.abs(this.minYvalue)
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

		createLine(xValue = this.xValueKey, yValue = this.yValueKey) {
			this.line = d3
				.line()
				.curve(d3.curveCardinal)
				.x((d) => this.rangeX(d[xValue]))
				.y((d) => this.rangeY(d[yValue]));
		}

		appendArea(data, area = this.area) {
			this.svg
				.append("path")
				.data([data])
				.attr("class", "area")
				.attr("fill", "url(#gradient)")
				.attr("d", area);
		}

		appendLine(data, line = this.line) {
			this.svg
				.append("path")
				.data([data])
				.attr("class", "line")
				.attr("stroke", "url(#gradientLine)")
				.attr("d", line);
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
					{ offset: 0, stopColor: "#5D7CF6", opacity: 1 },
					{ offset: this.gradPoints()[0], stopColor: "#5D7CF6", opacity: 0 },
					{ offset: this.gradPoints()[1], stopColor: "#D55460", opacity: 0 },
					{ offset: 100, stopColor: "#D55460", opacity: 1 },
				])
				.enter()
				.append("stop")
				.attr("offset", (d) => d.offset + "%")
				.attr("stop-color", (d) => d.stopColor)
				.attr("stop-opacity", (d) => d.opacity);

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
					{ offset: 0, color: "#5D7CF6" },
					{ offset: this.gradPoints()[2], color: "#5D7CF6" },
					{ offset: this.gradPoints()[2], color: "#D55460" },
					{ offset: 100, color: "#D55460" },
				])
				.enter()
				.append("stop")
				.attr("offset", (d) => d.offset + "%")
				.attr("stop-color", (d) => d.color);
		}

		appendAxis(xRange = this.rangeX, yRange = this.rangeY) {
			this.svg
				.append("g")
				.attr("transform", "translate(0," + this.dimensions.height + ")")
				.call(
					d3
						.axisBottom(xRange)
						.tickFormat((d) => d3.timeFormat("%M:%S")(d3.timeParse("%M")(d)))
				);

			this.svg.append("g").call(
				d3.axisLeft(yRange).tickFormat((d) => {
					let pre = d > 0 ? "+" : "";
					if (Math.abs(d) / 1000 >= 1) d = pre + d / 1000 + "K";
					return d;
				})
			);
		}

		appendAxisTitles(yTitle = this.yValueName) {
			this.svg
				.append("text")
				.attr("class", "axis-unit")
				.attr(
					"transform",
					"translate(" + (-this.dimensions.margins[3] + 5) + ",15)"
				)
				.text(yTitle);
		}

		appendZeroAxis() {
			this.svg
				.append("line")
				.attr("class", "zero-axis")
				.style("stroke-dasharray", "3, 3")
				.attr("x1", 0)
				.attr("y1", this.rangeY(0))
				.attr("x2", this.dimensions.width)
				.attr("y2", this.rangeY(0));
		}

		appendRightBorder() {
			this.svg
				.append("line")
				.attr("class", "right-border")
				.style("stroke-dasharray", "2, 1")
				.attr("x1", this.dimensions.width)
				.attr("y1", 0)
				.attr("x2", this.dimensions.width)
				.attr("y2", this.dimensions.height);
		}

		tooltipInit(
			data,
			xValue = this.xValueKey,
			yValue = this.yValueKey,
			xText = this.xValueName,
			yText = this.yValueName
		) {
			let rangeFor1Minute = this.rangeX(1);

			d3.select("svg")
				.append("g")
				.attr("id", "slider")
				.attr("pointer-events", "none")
				.attr("display", "none");
			this.tooltip.node = d3.select("#slider");
			this.tooltip.node
				.append("rect")
				.attr("stroke-width", "1")
				.attr(
					"stroke-dasharray",
					`0, 15, ${this.dimensions.height}, 15, ${this.dimensions.height}`
				)
				.attr("x", -rangeFor1Minute)
				.attr("height", this.dimensions.height)
				.attr("width", rangeFor1Minute);
			this.tooltip.node
				.append("line")
				.attr("stroke-width", "3")
				.attr("x1", 0)
				.attr("y1", 0)
				.attr("x2", 0)
				.attr("y2", this.dimensions.height)
				.attr("transform", "translate(-2, 0)");

			this.tooltip.show = (d) => {
				this.tooltip.node.node().removeAttribute("display");
				this.tooltip.node
					.node()
					.setAttribute(
						"transform",
						`translate(${this.rangeX(d[xValue]) + this.dimensions.margins[3]},${
							this.dimensions.margins[0]
						})`
					);
				this.sliderCallFunction(d[xValue], d[yValue]);
			};

			this.tooltip.hide = () => {
				this.tooltip.node.node().setAttribute("display", "none");
			};

			d3.select("svg")
				.append("g")
				.attr(
					"transform",
					"translate(" +
						this.dimensions.margins[3] +
						"," +
						this.dimensions.margins[0] +
						")"
				)
				.attr("fill", "none")
				.attr("pointer-events", "all")
				.selectAll("rect")
				.data(
					d3.pairs([...data, { [xValue]: data[data.length - 1][xValue] + 1 }])
				)
				.join("rect")
				.attr("x", ([a, b]) => this.rangeX(a[xValue] - 1))
				.attr("height", this.dimensions.height)
				.attr(
					"width",
					([a, b]) => this.rangeX(b[xValue]) - this.rangeX(a[xValue])
				)
				.on("mouseover", (event, [a]) => this.tooltip.show(a))
				.on("mouseout", () => this.tooltip.hide());
		}

		draw(data) {
			this.setDataValues(data);
			this.setRanges();
			this.scaleRanges(data);
			this.defineGrad();
			this.createArea();
			this.createLine();
			this.appendAxis();
			this.appendZeroAxis();
			this.appendAxisTitles();
			this.appendRightBorder();
			this.appendArea(data);
			this.appendLine(data);
			this.tooltipInit(data);
		}
	}

	const ref = useRef();

	// let goldChart = d3.select(ref.current);
	let goldChart;

	if (props.goldFrames.length !== 0) {
		d3.select("svg").remove();
		// d3.select(goldChart).remove();

		if (d3.select("svg")?._groups[0][0]?.tagName === "svg") {
			d3.select("svg").remove();
			goldChart = new Chart(
				d3.select(ref.current)?._groups[0][0],
				[20, 20, 30, 40]
			);

			goldChart.setChartDataFields("Time", "goldDifference", "Time", "Gold");

			goldChart.setSliderCallFunction((a, b) =>
				console.log("a = " + a + " b = " + b)
			);

			goldChart.draw(props.goldFrames);
		} else {
			goldChart = new Chart(
				d3.select(ref.current)?._groups[0][0],
				[20, 20, 30, 40]
			);

			goldChart.setChartDataFields("Time", "goldDifference", "Time", "Gold");

			goldChart.setSliderCallFunction((a, b) => {
				props.frameChange(a - 1);
				// console.log("a = " + a + " b = " + b);
			});

			goldChart.draw(props.goldFrames);
		}
	}

	return (
		<div className={`w-[782px] h-[452px] relative`}>
			<div ref={ref} className=" w-[1000px] h-[600px]" />
		</div>
	);
};

export default GoldDiffChart;
