# Planificación de proyectos — Guía reutilizable

> Copia este archivo en cada proyecto nuevo y rellena cada paso.
> Regla de oro: **no escribas código hasta terminar el Paso 7.**

Analogía: vamos a abrir una **pizzería de juguete**. Antes de cocinar, decides qué vendes, quién compra, qué guardas en la nevera y cómo se pasan los pedidos.

---

## Paso 0 — ¿Para qué hago esto? (objetivo de estudio)
🧒 *¿Qué quiero aprender jugando a esto?*

- Área a entrenar: `____` (ej: arquitectura front)
- Lo que **sí** voy a cuidar al máximo: `____`
- Lo que haré "rápido y simple": `____`

**Mini Delivery:** foco = front (feature-based, composition, tokens). Back y BD simples.

---

## Paso 1 — La idea en 1 frase
🧒 *Si no cabe en una frase, es demasiado grande.*

> **Mini Delivery** permite a un cliente ver productos, armar un carrito y hacer un pedido; el negocio ve los pedidos y cambia su estado.

---

## Paso 2 — Quién lo usa y qué puede hacer (historias de usuario)
🧒 *¿Quién juega y a qué juega?*

Formato: `Como <rol> quiero <acción> para <beneficio>`

| # | Rol | Historia | MVP |
|---|-----|----------|-----|
| 1 | Cliente | ver el menú de productos | ✅ |
| 2 | Cliente | agregar/quitar productos del carrito | ✅ |
| 3 | Cliente | confirmar pedido con nombre y dirección | ✅ |
| 4 | Cliente | ver el estado de mi pedido | ✅ |
| 5 | Admin | ver la lista de pedidos | ✅ |
| 6 | Admin | cambiar estado (pendiente → preparando → enviado → entregado) | ✅ |
| 7 | Cliente | login / registro | ❌ (después) |
| 8 | Cliente | pagar online | ❌ (fuera) |

**Fuera de alcance** (escríbelo, protege tu tiempo): pagos, login, mapas, notificaciones.

---

## Paso 3 — Pantallas y flujo
🧒 *Dibuja las habitaciones de la casa y las puertas entre ellas.*

```
[Menú] → [Carrito] → [Checkout] → [Pedido confirmado / Estado]
[Admin: Lista pedidos] → [Detalle pedido + cambiar estado]
```

Haz un boceto a mano o en Excalidraw de cada pantalla (5 min c/u, sin colores).

---

## Paso 4 — Modelo de datos (la nevera)
🧒 *¿Qué cosas tengo que recordar y cómo se relacionan?*

```
Product  (id, name, description, price, image_url, available)
Order    (id, customer_name, address, phone, status, total, created_at)
OrderItem(id, order_id → Order, product_id → Product, quantity, unit_price)
```

Relaciones: `Order 1 — N OrderItem N — 1 Product`

> ¿Por qué `unit_price` en OrderItem? Si mañana sube el precio, el pedido viejo no debe cambiar.

---

## Paso 5 — Contrato de la API (cómo se piden las cosas)
🧒 *El menú que el front le lee al back.*

| Método | Ruta | Qué hace |
|--------|------|----------|
| GET | `/api/products` | lista productos |
| POST | `/api/orders` | crea pedido `{ customer, items:[{productId, qty}] }` |
| GET | `/api/orders/:id` | ver un pedido |
| GET | `/api/orders` | (admin) lista pedidos |
| PATCH | `/api/orders/:id/status` | (admin) cambia estado |

Define también el formato de error: `{ "error": { "code": "...", "message": "..." } }`

---

## Paso 6 — Decisiones técnicas (ADR mini)
🧒 *Elige tus herramientas y anota por qué, para no dudar después.*

Formato: **Decisión — Por qué — Alternativa descartada**

| Tema | Decisión | Por qué |
|------|----------|---------|
| Front | `____` (sugerido: React + TS + Vite) | |
| Back | `____` (sugerido: Node + Express/Hono + TS) | |
| BD | `____` (sugerido: PostgreSQL o SQLite) | |
| Arquitectura front | **Feature-based** | cada feature (menu, cart, orders) es autónoma |
| Patrón UI | **Composition / Compound components** | `<Cart><Cart.Item/><Cart.Total/></Cart>` en vez de props gigantes |
| Estilos | **Design tokens** | colores/espaciados en un solo sitio → consistencia |
| Arquitectura back | **Capas**: routes → controller → service → repository | simple y suficiente; no hace falta hexagonal aquí |

---

## Paso 7 — Estructura de carpetas
🧒 *Cajas con etiqueta para cada juguete.*

```
frontend/src/
  app/            # router, providers
  features/
    menu/         # components/, hooks/, api/, types.ts, index.ts
    cart/
    checkout/
    orders/
    admin/
  shared/
    ui/           # Button, Card... (componentes composables)
    tokens/       # colors, spacing, typography
    lib/          # http client, utils

backend/src/
  modules/
    products/     # routes, controller, service, repository
    orders/
  shared/         # db, errors, middlewares
  db/             # migrations, seed
```

Regla: una feature **no importa** de otra feature directamente; comparte vía `shared/` o su `index.ts`.

---

## Paso 8 — Backlog en rebanadas verticales
🧒 *Come la pizza por porciones, no capa por capa.*

Cada tarea atraviesa BD → API → UI y termina **funcionando**.

1. [ ] Setup: repos, linters, tokens base, BD con seed de productos
2. [ ] Ver menú (GET products + pantalla Menú)
3. [ ] Carrito (solo front, estado local)
4. [ ] Checkout (POST orders + formulario)
5. [ ] Estado del pedido (GET order/:id)
6. [ ] Admin: lista + cambiar estado
7. [ ] Pulido: loading, errores, vacíos, responsive

---

## Paso 9 — Definición de "Terminado"
🧒 *¿Cuándo puedo decir "¡ya está!"?*

- [ ] Funciona el flujo completo de punta a punta
- [ ] Sin errores en consola
- [ ] Estados de carga / error / vacío cubiertos
- [ ] README con cómo correrlo
- [ ] Commit con mensaje claro

---

## Paso 10 — Retro (al terminar)
🧒 *¿Qué aprendí? ¿Qué haría distinto?*

- Lo que salió bien:
- Lo que me costó:
- Lo que cambiaré en el próximo proyecto:
