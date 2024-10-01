import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';

const initTerminal =()  => {
  const terminal = new Terminal({
    fontFamily: "Cascadia Mono",
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

  // write test after some time...
  setTimeout(() => {
    terminal.write('0123456789\r\n');
    terminal.write('Linux version 6.8.11-200.1725856906.16.65fc3bb9.utm.x86_64 (fedora@gentoo) (gcc (GCC) 13.3.1 20240522 (Red Hat 13.3.1-1), GNU ld version 2.40-14.');
    terminal.write('\x1b[0;3m0123456789\r\n');
    terminal.write('\x1b[1;3m0123456789\r\n');
    terminal.write('\x1b[mЮжЮжЮжЮжЮж\r\n');
    terminal.write('\x1b[1mЮжЮжЮжЮжЮж\r\n');
    terminal.write('\x1b[0;3mЮжЮжЮжЮжЮж\r\n');
    terminal.write('\x1b[1;3mЮжЮжЮжЮжЮж\r\n');
  }, 100);
}

document.fonts.ready.then(
  fontFaceSet => Promise.all(Array.from(fontFaceSet).map(el => el.load())).then(initTerminal)
);