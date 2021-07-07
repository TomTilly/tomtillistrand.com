import React from 'react';
import { Button } from '../components/Button';

function IndexPage() {
  return (
    <div>
      <h1>Heading 1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <h2>Heading 2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <h3>Heading 3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <ul>
        <li>Hello!</li>
        <li>List Item #2!</li>
        <li>List Item #3!</li>
        <li>List Item #4!</li>
      </ul>
      <form action="/" method="GET">
        <div className="form-group">
          <label htmlFor="name">
            Name
            <input
              name="name"
              type="text"
              placeholder="Placeholder text!"
              id="name"
            />
          </label>
        </div>
        <input type="password" />
        <input type="email" />
        <input type="number" />
        <textarea />
        <button type="submit">Submit</button>
      </form>
      <h4>Heading 4</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <h5>Heading 5</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <h6 id="hire-me">Heading 6</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ipsa
        repellendus neque provident accusamus impedit quaerat incidunt officiis
        velit dolore, vel quas eos ullam saepe. A porro natus cum rerum.
      </p>
      <Button>Let's work together</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}

export default IndexPage;
