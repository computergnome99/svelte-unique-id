export class UniqueId {
	private prefix: string = '';
	private suffix: string = '';

	constructor(prefix?: string, suffix?: string) {
		this.prefix = prefix ?? this.prefix;
		this.suffix = suffix ?? this.suffix;
	}

	public id = `${this.prefix ? `${this.prefix}-` : ''}${(new Date().getTime() * (Math.random() * 36)).toString(36).substring(2, 5)}-${(new Date().getTime() * (Math.random() * 64)).toString(36).substring(2, 5)}${this.suffix ? `-${this.suffix}` : ''}`;
}
