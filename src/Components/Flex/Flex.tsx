import { Property } from "csstype";

export interface FlexProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  flexDirection?: Property.FlexDirection;
  flexWrap?: Property.FlexWrap;
  flexGrow?: Property.FlexGrow;
  flex?: Property.Flex;
  justifyContent?: Property.JustifyContent;
  alignContent?: Property.AlignContent;
  alignItems?: Property.AlignItems;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

export default function Flex({
  children,
  className = "",
  fullWidth = false,
  fullHeight = false,
  ...rest
}: FlexProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        width: fullWidth ? "100%" : "intitial",
        height: fullHeight ? "100%" : "intitial",
        ...rest,
      }}
    >
      {children}
    </div>
  );
}
