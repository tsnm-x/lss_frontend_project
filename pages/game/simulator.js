import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

import Header from "../../components/shared/Old-Shared-Components/header/Header";

const unityContext = new UnityContext({
	loaderUrl: "/assets/LSS WebGL.loader.js",
	dataUrl: "/assets/LSS WebGL.data.unityweb",
	frameworkUrl: "/assets/LSS WebGL.framework.js.unityweb",
	codeUrl: "/assets/LSS WebGL.wasm.unityweb",
});

export default function Simulator() {
	return (
		<>
			<Header />
			<Unity
				style={{
					width: "80%",
					// height: "600px",
					background: "#231F20",
					justifySelf: "center",
					alignSelf: "center",
				}}
				className="ml-[10%]"
				unityContext={unityContext}
			/>
		</>
	);
}
