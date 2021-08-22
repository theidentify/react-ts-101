import React, { useState } from 'react';

type Props = {
  header: React.ReactNode;
  sidebar: React.ReactElement;
  footer: string;
  render: (value: boolean) => React.ReactNode;
};

export function Example({
  header,
  sidebar,
  footer,
  children,
  render,
}: React.PropsWithChildren<Props>) {
  const [state, setState] = useState(false);
  return (
    <div>
      <header>{header}</header>
      <div>{sidebar}</div>
      <div>{children}</div>
      <footer>{footer}</footer>
      {/* {render(state)} */}
      {React.Children.toArray(render(state))}
    </div>
  );
}

function App() {
  return <Example header={<div>test</div>} sidebar={'string'} />;
}
