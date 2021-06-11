export interface IButton {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "PRIMARY" | "SECONDARY";
}
