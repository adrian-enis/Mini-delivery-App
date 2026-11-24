// Página demo para ver los tokens en acción. Bórrala cuando tengas tu diseño.
import './TokensDemo.css'

const colors = [
  'primary', 'primary-soft', 'bg', 'surface', 'border', 'text', 'text-muted',
  'success', 'warning', 'danger', 'info',
]

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
const spaces = ['1', '2', '3', '4', '6', '8', '12']

const orderStates = [
  { label: 'Pendiente', tone: 'warning' },
  { label: 'Preparando', tone: 'info' },
  { label: 'Entregado', tone: 'success' },
  { label: 'Cancelado', tone: 'danger' },
]

export function TokensDemo() {
  return (
    <main className="demo">
      <h1>Mini Delivery · Tokens</h1>

      <section>
        <h2>Colores</h2>
        <div className="demo-grid">
          {colors.map((c) => (
            <div key={c} className="swatch">
              <div className="swatch-color" style={{ background: `var(--color-${c})` }} />
              <code>--color-{c}</code>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Tipografía</h2>
        {sizes.map((s) => (
          <p key={s} style={{ fontSize: `var(--font-size-${s})` }}>
            {s} · Hamburguesa clásica
          </p>
        ))}
      </section>

      <section>
        <h2>Espaciado</h2>
        {spaces.map((s) => (
          <div key={s} className="space-row">
            <code>--space-{s}</code>
            <div className="space-bar" style={{ width: `var(--space-${s})` }} />
          </div>
        ))}
      </section>

      <section>
        <h2>Ejemplo: tarjeta de producto</h2>
        <article className="card">
          <div className="card-img">🍔</div>
          <div className="card-body">
            <h3>Hamburguesa clásica</h3>
            <p className="muted">Carne, queso, lechuga y tomate.</p>
            <div className="card-footer">
              <strong>$8.50</strong>
              <button className="btn">Agregar</button>
            </div>
          </div>
        </article>
      </section>

      <section>
        <h2>Ejemplo: estados del pedido</h2>
        <div className="badges">
          {orderStates.map(({ label, tone }) => (
            <span
              key={label}
              className="badge"
              style={{ color: `var(--color-${tone})`, background: `var(--color-${tone}-soft)` }}
            >
              {label}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}
