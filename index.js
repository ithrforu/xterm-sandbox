import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';

const terminal = new Terminal({
  fontFamily: "Roboto Mono",
});


const fitAddon = new FitAddon();
terminal.loadAddon(fitAddon);

const terminalContainer = document.getElementById('xterm-container');
terminal.open(terminalContainer);

terminal.onKey(({ key }) => {
  terminal.write(key);
});

const resizeObserver = new ResizeObserver(() => {
  requestAnimationFrame(() => fitAddon.fit());
});

resizeObserver.observe(terminalContainer);