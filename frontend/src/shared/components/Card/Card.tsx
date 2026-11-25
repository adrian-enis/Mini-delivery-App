import type { HTMLAttributes, ImgHTMLAttributes } from 'react'
import styles from './Card.module.css'

type DivProps = HTMLAttributes<HTMLDivElement>

const join = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ')

// Contenedor: solo da la forma (borde, radio, sombra). El contenido llega por children.
export function Card({ className, children, ...rest }: HTMLAttributes<HTMLElement>) {
  return (
    <article className={join(styles.card, className)} {...rest}>
      {children}
    </article>
  )
}

export function CardMedia({ className, alt, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img className={join(styles.media, className)} alt={alt ?? ''} {...rest} />
}

export function CardBody({ className, children, ...rest }: DivProps) {
  return (
    <div className={join(styles.body, className)} {...rest}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...rest }: DivProps) {
  return (
    <div className={join(styles.footer, className)} {...rest}>
      {children}
    </div>
  )
}

// Compound component: <Card>, <Card.Media>, <Card.Body>, <Card.Footer>
Card.Media = CardMedia
Card.Body = CardBody
Card.Footer = CardFooter
