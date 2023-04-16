import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { useServerTimeLoader } from '~/routes/layout';
import styles from './footer.module.css';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <Link href="https://www.builder.io/" target="_blank" class={styles.anchor}>
        Made with ♡ by Builder.io
        <span class={styles.spacer}>|</span>
        <span>{serverTime.value.date}</span>
      </Link>
    </footer>
  );
});
