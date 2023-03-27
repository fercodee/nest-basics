export abstract class MembersRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}

//? Why not interface? Intenfaces dont auto import in Nest.