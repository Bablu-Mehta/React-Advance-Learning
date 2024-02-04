import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why Work With us?</h2>
        <Accordion className="accordion">
          <Accordion.Item className="accordion-item">
            <Accordion.Title id="experience" className="accordion-item-title">
              We got 20 years of Experience.
            </Accordion.Title>
            <Accordion.Content
              id="experience"
              className="accordion-item-content"
            >
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  we are in the business of planning highly individualized
                  vacation trips for more than 20 Years.{" "}
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item className="accordion-item">
            <Accordion.Title id="local-guides" className="accordion-item-title">
              We are working with local guides.
            </Accordion.Title>
            <Accordion.Content
              id="local-guides"
              className="accordion-item-content"
            >
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  we are in the business of planning highly individualized
                  vacation trips for more than 20 Years.{" "}
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
