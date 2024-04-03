import { Produto } from "./Produto";

export class Short extends Produto {

     private _tamanho: number;

	constructor(id: number, nome: string, tipo: number, preco: number, cor: string, tamanho: number) {
		
          super(id, nome, tipo, preco, cor);
          this._tamanho = tamanho;
	}

    /**
     * Getter tamanho
     * @return {number}
     */
	public get tamanho(): number {
		return this._tamanho;
	}

    /**
     * Setter tamanho
     * @param {number} value
     */
	public set tamanho(value: number) {
		this._tamanho = value;
	}

     public visualizar(): void {
          super.visualizar();
          console.log(`Tamanho: ${this._tamanho}`);
     }
}