/** log the argument that is passed */
export const showLog = (data: any) => console.log(data);

type Abilities = {
  [key: string]: number | Abilities;
};

/** just a name and an age */
export interface Person {
  name: string;
  age: number;
  abilities?: Abilities;
}
