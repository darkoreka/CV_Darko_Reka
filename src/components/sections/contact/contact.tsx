import { Button } from "@/components/ui/button";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export function Contact() {
    return (
        <section id="contact" className="py-16 flex justify-center items-center">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Get In Touch</h2>
                <div className="max-w-md mx-auto">
                    <div className="flex justify-center space-x-4 mb-8">
                        <Link href="mailto:rekadarko@gmail.com">
                            <Button variant="outline" size="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span className="sr-only">Email</span>
                            </Button>
                        </Link>
                        <Link href="https://github.com/darkoreka">
                            <Button variant="outline" size="icon">
                                <FontAwesomeIcon icon={faGithub} />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/darkoreka/">
                            <Button variant="outline" size="icon">
                                <FontAwesomeIcon icon={faLinkedin} />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}