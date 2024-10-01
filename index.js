import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import XtermWebfont from 'xterm-webfont'

const terminal = new Terminal({
  fontFamily: "Roboto Mono",
});


const fitAddon = new FitAddon();
terminal.loadAddon(fitAddon);
terminal.loadAddon(new XtermWebfont());


const terminalContainer = document.getElementById('xterm-container');
terminal.loadWebfontAndOpen(terminalContainer)

terminal.onKey(({ key }) => {
  terminal.write(key);
});

const resizeObserver = new ResizeObserver(() => {
  requestAnimationFrame(() => fitAddon.fit());
});

resizeObserver.observe(terminalContainer);