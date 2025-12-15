/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { button as icon } from '@wordpress/icons';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import deprecated from './deprecated';
import Edit from './edit';
import save from './save';
import transforms from './transforms';

const { name } = metadata;

/**
 * Register the AI Summarize Buttons block
 */
registerBlockType( name, {
	...metadata,
	icon,
	example: {
		attributes: {
			layout: {
				type: 'flex',
				justifyContent: 'center',
			},
		},
		innerBlocks: [
			{
				name: 'core/button',
				attributes: {
					text: __( 'Summarize with AI', 'ai-summary-button' ),
				},
			},
			{
				name: 'core/button',
				attributes: {
					text: __( 'Get Summary', 'ai-summary-button' ),
				},
			},
		],
	},
	deprecated,
	transforms,
	edit: Edit,
	save,
} );
