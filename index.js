import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';
import "@fontsource/roboto-mono"; 
import "@fontsource/roboto-mono/400.css"; 
import "@fontsource/roboto-mono/400-italic.css"; 


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