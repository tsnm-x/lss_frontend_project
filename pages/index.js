import classes from "../styles/Home.module.css";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { MdOutlineKeyboardArrowDown, MdSearch } from "react-icons/md";
import useHttp from "../hook/useHttp";
import Loader from "../components/shared/loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/shared/header/Header";

import { AiFillCaretDown } from "react-icons/ai";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import leaveFeedback from "../public/assets/leave-feedback.png";
import Image from "next/image";
import IrealaImg from "../public/assets/Irelia.png";
import { profileAction } from "../store/profile";
import Router from "next/router";

export default function Home() {
	const servers = [
		"BR",
		"EUN",
		"EUW",
		"JP",
		"KR",
		"LA",
		"LA2",
		"NA",
		"OC",
		"TR",
		"RU",
	];
	const reqServers = [
		"BR1",
		"EUN1",
		"EUW1",
		"JP1",
		"KR",
		"LA1",
		"LA2",
		"NA1",
		"OC1",
		"TR1",
		"RU",
	];
	// region: reqServers[servers.indexOf(region)],
	const [region, setRegion] = useState(servers[2]);
	const [summonerName, setSummonerName] = useState("");
	const loading = useSelector((state) => state.loader.loader);
	const dispatch = useDispatch();
	const { hasError, sendRequest } = useHttp();

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	function requestHandler(res) {
		if (!res) {
			console.log(res, "no response from the server");
			// console.log(reqServers[servers.indexOf(region)], "no responsezz");
			setSummonerName("");
			return;
		}

		dispatch(
			profileAction.setProfileDataPage({
				profile: res.data.matches,
				// region,
				region: reqServers[servers.indexOf(region)],
				summonerName,
			})
		);
		Router.push(
			`/summoner/${reqServers[servers.indexOf(region)]}/${summonerName}`
		);
		setSummonerName("");
	}

	function searchHandler(e) {
		e.preventDefault();
		sendRequest(
			{
				url: "/summonerByName",
				method: "POST",
				body: {
					region: reqServers[servers.indexOf(region)],
					summonerName,
				},
			},
			requestHandler
		);
	}

	return (
		<div>
			<Header />

			<div
				className={` grid grid-cols-1 grid-rows-[repeat(2, 50%)] ${classes.wrapper}`}
			>
				{/* top section  */}
				<div className=" self-end justify-self-center w-full max-w-[580px] ">
					<div>
						<h3 className={`text-white ${classes.header}`}>
							Experience <span className="text-blue-700">The Ultimate</span>{" "}
							Simulator
						</h3>
						<h3 className={`text-white ${classes.header}`}>
							League Of Legends
						</h3>
					</div>
					<p className={`${classes.title} sf-13px-regular mx-auto flex flex-col `}>
						<span>
							Whether you like to dive straight into the fray, support your
							teammates, or
						</span>
						<span>
							something in between, there’s a spot for you on the Rift.
						</span>
					</p>

					<form
						className={`w-full mx-auto flex justify-between gap-x-5 ${classes.form}`}
					>
						<div className="flex grow">
							<Listbox value={region} onChange={setRegion}>
								{({ open }) => (
									<>
										<div className="relative z-10">
											<Listbox.Button className=" font-sf-pro flex-shrink-0 z-10 inline-flex items-center h-full px-4 text-[13px] font-medium text-center text-white bg-white-blue rounded-[5px] focus:outline-none">
												{region}
												{/* <MdOutlineKeyboardArrowDown className="text-lg" /> */}
												<AiFillCaretDown className=" text-[13px] ml-1 " />
											</Listbox.Button>

											<Transition
												show={open}
												as={Fragment}
												leave="transition ease-in duration-100"
												leaveFrom="opacity-100"
												leaveTo="opacity-0"
											>
												<Listbox.Options className="absolute z-10 mt-1  bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
													{servers.map((server) => (
														<Listbox.Option
															key={server}
															className={({ active }) =>
																classNames(
																	active
																		? "text-white bg-blue-700"
																		: "text-gray-900",
																	"cursor-default select-none relative py-2 pl-3 pr-9"
																)
															}
															value={server}
														>
															{({ region, active }) => (
																<>
																	<div className="flex items-center">
																		<span
																			className={classNames(
																				region
																					? "font-semibold"
																					: "font-normal",
																				"ml-3 block truncate"
																			)}
																		>
																			{server}
																		</span>
																	</div>

																	{region ? (
																		<span
																			className={classNames(
																				active
																					? "text-white"
																					: "text-indigo-600",
																				"absolute inset-y-0 right-0 flex items-center pr-4"
																			)}
																		>
																			<CheckIcon
																				className="h-5 w-5"
																				aria-hidden="true"
																			/>
																		</span>
																	) : null}
																</>
															)}
														</Listbox.Option>
													))}
												</Listbox.Options>
											</Transition>
										</div>
									</>
								)}
							</Listbox>

							<div className="relative w-full -left-2 ">
								<input
									type="search"
									id="search-dropdown"
									className="block p-2.5 pl-5 w-full h-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
									placeholder="Search for Summoner"
									value={summonerName}
									onChange={(e) => {
										setSummonerName(e.target.value);
									}}
									required
								/>
							</div>
						</div>
						<div className=" text-right">
							<button type="submit" className="btn" onClick={searchHandler}>
								{!loading ? (
									"search"
								) : (
									<span>
										<Loader />
									</span>
								)}
								{/* <MdSearch className="w-5 h-5" /> */}
							</button>
						</div>
						{hasError?.error && !summonerName && (
							<div
								className="flex mt-4 p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
								role="alert"
							>
								<svg
									className="inline flex-shrink-0 mr-3 w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
										clipRule="evenodd"
									></path>
								</svg>
								<div>{hasError?.error}</div>
							</div>
						)}
					</form>
				</div>
				{/* bottom sec  */}
				<div className=" container max-w-[580px] justify-self-center self-end ">
					<div className={`${classes.highlight} relative `}>
						{/* first row  */}
						<div className={`${classes.row} mb-9 w-[470px] ml-6 `}>
							<h4 className={`${classes.header} ${classes.sm_header}`}>
								what make us{" "}
								<span className=" text-white-blue">different?</span>{" "}
							</h4>
							<div className={`${classes.link_wrap}`}>
								<a href="#" className={`${classes.link}`}>
									learn more
								</a>
								<div className={`${classes.blue_bg}`}></div>
							</div>
						</div>
						{/* sec row  */}
						<div className={`${classes.row} max-w-[380px] `}>
							<div className={`${classes.link_wrap}`}>
								<a href="#" className={`${classes.link}`}>
									learn more
								</a>
								<div className={`${classes.blue_bg}`}></div>
							</div>
							<h4
								className={`${classes.header} ${classes.sm_header} flex flex-col `}
							>
								<span className=" normal-case">What do we mean by</span>
								<span className=" text-white-blue">simulating?</span>{" "}
							</h4>
						</div>
						{/* img wrap  */}
						<div className=" w-[335px] absolute -right-[165px] -bottom-[6px]">
							<Image src={IrealaImg} alt="ireala league of legends" />
						</div>
					</div>
				</div>
				{/* left chat  */}
				<div className={`feedback_btn_wrap`}>
					<div className={`btn_img`}>
						<Image src={leaveFeedback} alt="leave feedback img" />
					</div>
					<button className={` feedback_btn`}>
						<BsFillChatSquareTextFill className={`feedback_btn_icon`} />
						<p className={`feedback_btn_txt`}>leave feedback</p>
					</button>
				</div>
			</div>
		</div>
	);
}
