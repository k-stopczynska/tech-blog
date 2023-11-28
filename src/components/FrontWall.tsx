import { TextureAssetTask, Vector3 } from '@babylonjs/core';
import { Task, TaskType, useAssetManager } from 'react-babylonjs';
import '@babylonjs/core/Loading/loadingScreen';
import { babylonAssets } from '@/utils/utils';

const FrontWall = () => {
	const textureAssets: Task[] = [
		{
			taskType: TaskType.Texture,
			url: babylonAssets.brick,
			name: 'brick',
		},
	];
	const assetManagerResult = useAssetManager(textureAssets, {
		useDefaultLoadingScreen: true,
	});
	return (
		<box
			name='wall-front'
			width={50}
			height={50}
			position={new Vector3(0, 15, 25)}
			rotation={new Vector3(0, 0, 0)}
			receiveShadows
		>
			<standardMaterial name='brick'>
				<texture
					url={babylonAssets.brick}
					fromInstance={
						(
							assetManagerResult.taskNameMap[
								'brick'
							] as TextureAssetTask
						).texture
					}
					assignTo='diffuseTexture'
					uScale={40}
					vScale={40}
				></texture>
			</standardMaterial>
		</box>
	);
};

export default FrontWall;
