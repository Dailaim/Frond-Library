import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.module.css';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <Link href="/" title="qwik">
          <QwikLogo />
        </Link>
      </div>
      <ul>
        <li>
          <Link href="https://qwik.builder.io/docs/components/overview/" target="_blank">
            Docs
          </Link>
        </li>
        <li>
          <Link href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
            Examples
          </Link>
        </li>
        <li>
          <Link href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
            Tutorials
          </Link>
        </li>
      </ul>
    </header>
  );
});
