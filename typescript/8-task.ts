type MaybeString = string | null | undefined;

type StrictString = Exclude<MaybeString, null | undefined>;

let str:StrictString = "bye";

console.log(str)