export class Beer {
	id: number;
	user_id: number;
	session_id: number;
	brand: string= '';
	name: string= '';
	type: string= '';
	unique_code: string= '';
	created_at: Date= new Date();
	tasting_in_process: number= 0;
	tasting_complete: number=0;
	error: String;
	setSessionId(session_id: number) {
		this.session_id = session_id;
	}
}
