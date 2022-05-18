import Client from './client';
import Command from './cmd';

export declare global {
	var set: typeof import('../database/settings.json');
	var util: typeof import('./util');
	var database: {
		[k: string]: any;
	};
	var client: Client;
	var cmd: Command;
	var aviewonce: any,
	var asticker: any,
	var usr: any,
	var opts: any,
	var cekusr: any,
	var dbusr: any;
	var sock: any;
}
