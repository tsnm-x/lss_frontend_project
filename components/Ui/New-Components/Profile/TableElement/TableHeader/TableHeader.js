import React from "react";
import classes from "../Table.module.css";

const TableHeader = (props) => {
	return (
		<div
			className={` ${classes.tableHeaderRow} ${classes.tableHeader} ${props.className}`}
		>
			<div className={``}>Rank</div>
			<div className={``}>Role</div>
			<div className={``}>Champion</div>
			<div className={``}>WR</div>
			<div className={``}>KDA</div>
			<div className={``}>CS/Min</div>
			<div className={``}>Gold/Min</div>
			<div className={``}>Damage Dealt</div>
		</div>
	);
};

export default TableHeader;
