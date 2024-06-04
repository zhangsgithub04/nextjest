type ButtonType = { text: string; onClick: () => void };

export default function Button(props: ButtonType) {
  return <button onClick={props.onClick}>{props.text}</button>;
}
