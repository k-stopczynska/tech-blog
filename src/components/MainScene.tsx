'use client';

import React, { useRef, Suspense } from 'react';
import { Engine, Scene } from 'react-babylonjs';
import { Vector3, Color3 } from '@babylonjs/core';
import Ground from '@/components/Ground';
import FrontWall from '@/components/FrontWall';
import LeftWall from '@/components/LeftWall';
import RightWall from '@/components/RightWall';

const MainScene = () => {
	const boxRef = useRef();

	return (
		<Engine antialias adaptToDeviceRatio canvasId='babylon-canvas'>
			<Scene>
				<hemisphericLight
					name='light1'
					intensity={0.2}
					direction={Vector3.Up()}
				/>
				<freeCamera
					name='camera1'
					position={new Vector3(0, 10, -40)}
					setTarget={[Vector3.Zero()]}
				/>

				<directionalLight
					name='shadow-light'
					intensity={0.8}
					direction={
						new Vector3(
							(-10 * Math.PI) / 4,
							(-10 * Math.PI) / 4,
							-Math.PI,
						)
					}
					position={new Vector3(0, 5, 16)}
				>
					<shadowGenerator
						mapSize={1024}
						useBlurExponentialShadowMap
						blurKernel={64}
						shadowCastChildren
					></shadowGenerator>
				</directionalLight>
				<Suspense fallback={null}>
					<LeftWall />
					<FrontWall />
					<RightWall />
					<Ground />
				</Suspense>
			</Scene>
		</Engine>
	);
};

export default MainScene;
