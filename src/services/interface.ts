export interface Project {
	id: number;
	name: string;
	notes: Note[];
};

export interface Note {
	id: number;
	title: string;
	description?: string;
	completed: boolean;
	startDate: string;
	dueDate?: string;
	priority: "Baixa" | "Normal" | "Alta" | string;
	state: "Novo" | "Em Andamento" | "Pronto" | string;
	tags?: string[];
};