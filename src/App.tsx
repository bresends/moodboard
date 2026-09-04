import { useEffect, useMemo, useRef, useState } from 'react'
import { categories, references, type Category, type Reference } from './data'

type Filter = 'All' | Category | 'Reference Styles'

export function App() {
  const [filter, setFilter] = useState<Filter>('All')
  const [selected, setSelected] = useState<Reference | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const visibleReferences = useMemo(() => {
    if (filter === 'All') return references
    if (filter === 'Reference Styles') {
      return references.filter((reference) => reference.referenceStyle)
    }
    return references.filter((reference) => reference.category === filter)
  }, [filter])

  useEffect(() => {
    if (selected) dialogRef.current?.showModal()
    else dialogRef.current?.close()
  }, [selected])

  const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`
  const categoryCount = (category: Category) =>
    references.filter((reference) => reference.category === category).length

  return (
    <main>
      <h1 className="visually-hidden">Moodboard — arquivo de referências visuais</h1>

      <nav className="filters" aria-label="Filtrar referências">
        <FilterButton active={filter === 'All'} count={references.length} onClick={() => setFilter('All')}>
          All
        </FilterButton>

        {categories.map((category) => (
          <FilterButton
            key={category}
            active={filter === category}
            count={categoryCount(category)}
            onClick={() => setFilter(category)}
          >
            {category}
          </FilterButton>
        ))}

        <FilterButton
          active={filter === 'Reference Styles'}
          count={references.filter((reference) => reference.referenceStyle).length}
          icon="◆"
          onClick={() => setFilter('Reference Styles')}
        >
          Reference Styles
        </FilterButton>
      </nav>

      <p className="visually-hidden" aria-live="polite">
        {visibleReferences.length} referências visíveis
      </p>

      <section className="grid" aria-label="Referências visuais">
        {visibleReferences.map((reference, position) => (
          <button
            className="card"
            key={reference.id}
            type="button"
            aria-label={`Abrir referência ${reference.title}`}
            onClick={() => setSelected(reference)}
          >
            <span className="card-image">
              <img src={assetUrl(reference.image)} alt="" loading="lazy" />
            </span>

            <span className="card-body">
              <span className="card-heading">
                <span className="card-title">{reference.title}</span>
                <span className="card-note">{reference.note}</span>
              </span>

              <span className="tags">
                {reference.styles.slice(0, 3).map((style) => (
                  <span className="tag tag--style" key={style}>{style}</span>
                ))}
                {reference.styles.length > 3 && <span className="more">+{reference.styles.length - 3}</span>}
              </span>

              <span className="card-footer">
                <span><span className="diamond">◆</span> {reference.category}</span>
                <span>{String(position + 1).padStart(2, '0')} / {String(visibleReferences.length).padStart(2, '0')}</span>
              </span>
            </span>
          </button>
        ))}
      </section>

      <dialog
        ref={dialogRef}
        className="detail"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setSelected(null)
        }}
      >
        {selected && (
          <article>
            <div className="detail-image">
              <img src={assetUrl(selected.image)} alt={selected.alt} />
            </div>
            <div className="detail-copy">
              <button className="close" type="button" aria-label="Fechar" onClick={() => setSelected(null)}>×</button>
              <p className="eyebrow"><span className="diamond">◆</span> {selected.category}</p>
              <h2>{selected.title}</h2>
              <p className="detail-note">{selected.note}</p>
              <section className="style-guide" aria-labelledby={`style-guide-${selected.id}`}>
                <h3 id={`style-guide-${selected.id}`}>Style guide</h3>

                <div className="guide-group">
                  <p>Style family</p>
                  <div className="detail-tags">
                    {selected.styles.map((style) => <span className="tag tag--style" key={style}>{style}</span>)}
                  </div>
                </div>

                <div className="guide-group">
                  <p>Visual techniques</p>
                  <div className="detail-tags">
                    {selected.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </div>

                <div className="guide-group">
                  <p>Search similar</p>
                  <div className="search-terms">
                    {selected.searchTerms.map((term) => (
                      <a
                        href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(term)}`}
                        target="_blank"
                        rel="noreferrer"
                        key={term}
                      >
                        {term}<span aria-hidden="true"> ↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
              <dl>
                <div><dt>Reference</dt><dd>{String(selected.id).padStart(2, '0')} / {references.length}</dd></div>
                <div><dt>Collection</dt><dd>Reference styles</dd></div>
              </dl>
            </div>
          </article>
        )}
      </dialog>
    </main>
  )
}

interface FilterButtonProps {
  active: boolean
  children: string
  count: number
  icon?: string
  onClick: () => void
}

function FilterButton({ active, children, count, icon, onClick }: FilterButtonProps) {
  return (
    <button
      className={`filter ${active ? 'is-active' : ''}`}
      type="button"
      aria-pressed={active}
      onClick={onClick}
    >
      {icon && <span className="filter-icon">{icon}</span>}
      <span>{children}</span>
      <span className="filter-count">{count}</span>
    </button>
  )
}
