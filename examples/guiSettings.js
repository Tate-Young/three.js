import { GUI } from './jsm/libs/dat.gui.module.js';

export let settings = {
	'hemiLight show': true,
	'hemiLight x axis': 0,
	'hemiLight y axis': 50,
	'hemiLight z axis': 0,
	'hemiLight strength': 0.6,
};

export function createPanel({
	hemiLight, hemiLightHelper,
}) {
	const panel = new GUI( { width: 310 } );

	const folder1 = panel.addFolder( '光线' );
	// const folder2 = panel.addFolder( 'Activation/Deactivation' );
	// const folder3 = panel.addFolder( 'Pausing/Stepping' );
	// const folder4 = panel.addFolder( 'Crossfading' );
	// const folder5 = panel.addFolder( 'Blend Weights' );
	// const folder6 = panel.addFolder( 'General Speed' );

	folder1.add( settings, 'hemiLight show' ).onChange( (visibility) => showHemiLight(hemiLight, hemiLightHelper, visibility) );
	folder1.add( settings, 'hemiLight x axis', 0, 100, 10).onChange(() => changeHemiLightAxis(hemiLight));
	folder1.add( settings, 'hemiLight y axis', 0, 100, 10).onChange(() => changeHemiLightAxis(hemiLight));
	folder1.add( settings, 'hemiLight z axis', 0, 100, 10).onChange(() => changeHemiLightAxis(hemiLight));
	folder1.add( settings, 'hemiLight strength', 0, 1, 0.1 ).onChange(() => changeHemiLightStrength(hemiLight));
	// folder2.add( settings, 'deactivate all' );
	// folder2.add( settings, 'activate all' );
	// folder3.add( settings, 'pause/continue' );
	// folder3.add( settings, 'make single step' );
	// folder3.add( settings, 'modify step size', 0.01, 0.1, 0.001 );
	// crossFadeControls.push( folder4.add( settings, 'from walk to idle' ) );
	// crossFadeControls.push( folder4.add( settings, 'from idle to walk' ) );
	// crossFadeControls.push( folder4.add( settings, 'from walk to run' ) );
	// crossFadeControls.push( folder4.add( settings, 'from run to walk' ) );
	// folder4.add( settings, 'use default duration' );
	// folder4.add( settings, 'set custom duration', 0, 10, 0.01 );
	// folder5.add( settings, 'modify idle weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {

	// 	setWeight( idleAction, weight );

	// } );
	// folder5.add( settings, 'modify walk weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {

	// 	setWeight( walkAction, weight );

	// } );
	// folder5.add( settings, 'modify run weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {

	// 	setWeight( runAction, weight );

	// } );
	// folder6.add( settings, 'modify time scale', 0.0, 1.5, 0.01 ).onChange( modifyTimeScale );

	folder1.open();
	// folder2.open();
	// folder3.open();
	// folder4.open();
	// folder5.open();
	// folder6.open();

	// crossFadeControls.forEach( function ( control ) {

	// 	control.classList1 = control.domElement.parentElement.parentElement.classList;
	// 	control.classList2 = control.domElement.previousElementSibling.classList;

	// 	control.setDisabled = function () {

	// 		control.classList1.add( 'no-pointer-events' );
	// 		control.classList2.add( 'control-disabled' );

	// 	};

	// 	control.setEnabled = function () {

	// 		control.classList1.remove( 'no-pointer-events' );
	// 		control.classList2.remove( 'control-disabled' );

	// 	};

	// } );
	}


function showHemiLight(hemiLight, hemiLightHelper, visibility) {
	hemiLight.visible = visibility;
	hemiLightHelper.visible = visibility;
}

function changeHemiLightAxis(hemiLight) {
	hemiLight.position.set( settings[ 'hemiLight x axis' ], settings[ 'hemiLight y axis' ], settings[ 'hemiLight z axis' ] );
	console.log(hemiLight.position.x, hemiLight.position.y, hemiLight.position.z)
}

function changeHemiLightStrength(hemiLight) {
	hemiLight.intensity = settings[ 'hemiLight strength' ];
	console.log(settings[ 'hemiLight strength' ], hemiLight, hemiLight.intensity);
}
