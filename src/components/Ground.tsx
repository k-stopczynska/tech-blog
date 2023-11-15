import { TextureAssetTask, Vector3 } from '@babylonjs/core';
import { Task, TaskType, useAssetManager } from 'react-babylonjs';
import '@babylonjs/core/Loading/loadingScreen';
import { babylonAssets } from '@/utils/utils';

const Ground = () => {
	const textureAssets: Task[] = [
		{
			taskType: TaskType.Texture,
			url: babylonAssets.wood1,
			name: 'wood1',
		},
	];
	const assetManagerResult = useAssetManager(textureAssets, {
		useDefaultLoadingScreen: true,
	});
	return (
		<ground
			name='ground'
			width={50}
			height={50}
			position={new Vector3(0, -10, 0)}
			rotation={new Vector3(0, 0, 0)}
			receiveShadows
		>
			<standardMaterial name='table'>
				<texture
					url={babylonAssets.wood1}
					fromInstance={
						(
							assetManagerResult.taskNameMap[
								'wood1'
							] as TextureAssetTask
						).texture
					}
					assignTo='diffuseTexture'
					uScale={10}
					vScale={10}
				></texture>
			</standardMaterial>
		</ground>
	);
};

export default Ground;
