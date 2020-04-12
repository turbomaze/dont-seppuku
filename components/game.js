import { Horizontal, Vertical } from './ui';

export function Game () {
  return (
    <Horizontal>
      <Vertical flex={1}>
        <div style={{ background: '#444444', flex: 1 }}></div>
        <div style={{ background: '#666666', flex: 2 }}></div>
      </Vertical>

      <div style={{ background: '#888888', flex: 1 }}></div>

      <div style={{ background: '#aaaaaa', flex: 1 }}></div>

      <div style={{ background: '#bbbbbb', flex: 1 }}></div>
    </Horizontal>
  );
}
