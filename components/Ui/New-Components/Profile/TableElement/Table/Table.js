import React, { useEffect, useState } from "react";
import TableControlBtns from "../TableControlBtns/TableControlBtns";
import TableHeader from "../TableHeader/TableHeader";
import TableBodyRow from "../TableBodyRow/TableBodyRow";
import useHttp from "../../../../../../hook/useHttp";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Table = (props) => {
	const [expand, setExpand] = useState(false);
	const champions = useSelector((state)=> state.champMostPlayed.champions);
	const router = useRouter();

	useEffect(()=>{
		router.push({
			pathname: '/summoner/[region]/[summonerName]',
			query: {region: router?.query?.region, summonerName: router?.query?.summonerName}
		}, `/summoner/${router?.query?.region}/${router?.query?.summonerName}/championPool`, { shallow: true })
	}, [])

	useEffect(() => {
		router.beforePopState(({ as }) => {
			as ===  `/summoner/${router?.query?.region}/${router?.query?.summonerName}` 
			? props.controller("overview")
			: as ===  `/summoner/${router?.query?.region}/${router?.query?.summonerName?.replaceAll(' ', '%20')}` 
			&& props.controller("overview")
			
			return true;
		});

		return () => {
			router.beforePopState(() => true);
		};
	}, [router]);

	return (
		<section className=" mt-[100px] mb-[300px] ">
			<div className="container">
				<TableControlBtns />
				<TableHeader className=" mt-10 " />
				{/* table row  */}
				<div className=" mt-[25px] ">
					{champions.length >= 10
						? champions.slice(0, 11).map((row, index) => {
								return <TableBodyRow key={index} {...row} />;
						  })
						: champions.map((row, index) => {
								return <TableBodyRow key={index} {...row} />;
						  })}
				</div>
			</div>
		</section>
	);
};

export default Table;
