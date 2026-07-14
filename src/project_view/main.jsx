import Card from "../components/ui/card"
import P from "../assets/projects.json"
import Nav from "../components/ui/Nav";

export default function Projects() {

    return (
        <>
            <Nav links={[
                { text: "REVENIR", href: "/" },
            ]} />

            <div className="grid lg:mt-15 lg:grid-cols-3 gap-3 p-5">
                {P.map((el, id) => (
                    <Card title={el.title}
                        key={id}
                        description={el.description}
                        tags={el.tags}
                        preview={el.preview}
                        link={el.link} />
                ))}
            </div>

        </>
    )
}