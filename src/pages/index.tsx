import { getCssText } from '../styles/stitches.config'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fonts</title>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <main>
        <h1>Example Title</h1>
        <p>Fusce interdum venenatis pellentesque. Vivamus eleifend nisi id augue laoreet convallis. Integer tristique elit in lacus mattis, nec condimentum augue congue. In ornare, massa at blandit mollis, ante erat mattis odio, et dignissim erat justo eu nisl.</p>
        <p>Sed feugiat, orci vel pulvinar rhoncus, erat lectus imperdiet leo, nec maximus diam nisl vitae dui. Donec condimentum dignissim augue. Aenean diam nisi, gravida sit amet eleifend id, dapibus vehicula risus.</p>
      </main>
    </>
  )
}
