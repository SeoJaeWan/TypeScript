function numberCount(props: number): number {
  return props * 2;
}

const numberCount2 = (props: number): number => {
  return props * 2;
};

function numberConsole(props: number): void {
  console.log(props * 2);
  //   return props;
}

const numberConsole2 = (props: number): void => {
  console.log(props * 2);
};

function anyFunc(x?: number) {
  //
}

function anyFunc2(x?: number): number | string {
  return x ? x : "undefined";
}
