class Cliente {
  private nome: string;
  private dataNascimento: Date;
  private endereco: Endereco;

  constructor(nome: string, dataNascimento: Date, endereco: Endereco) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.endereco = endereco;
  }

  public getNome(): string {
    return this.nome;
  }

  public getIdade(): number {
    return this.calculaIdade();
  }

  private calculaIdade(): number {
    const agora = new Date();
    const anoNascimento = this.dataNascimento.getFullYear();
    const mesNascimento = this.dataNascimento.getMonth();
    const diaNascimento = this.dataNascimento.getDate();

    let idade = agora.getFullYear() - anoNascimento;

    if (
      agora.getMonth() < mesNascimento ||
      (agora.getMonth() == mesNascimento && agora.getDate() < diaNascimento)
    ) {
      idade--;
    }

    return idade;
  }
}

class Endereco {
  private logradouro: string;
  private numero: number;
  private complemento: string;
  private cidade: string;
  private estado: string;

  constructor(
    logradouro: string,
    numero: number,
    complemento: string,
    cidade: string,
    estado: string
  ) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.cidade = cidade;
    this.estado = estado;
  }

  public getLogradouro(): string {
    return this.logradouro;
  }

  public getNumero(): number {
    return this.numero;
  }

  public getComplemento(): string {
    return this.complemento;
  }

  public getCidade(): string {
    return this.cidade;
  }

  public getEstado(): string {
    return this.estado;
  }
}
