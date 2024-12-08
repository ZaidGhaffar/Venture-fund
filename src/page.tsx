import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from 'lucide-react'
import ContactForm from "./components/contact-form"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            StartBrite
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Position
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Solution
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Program
            </Link>
          </div>
          <Button size="sm" variant="default">
            Let's Join Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              A Start-Up Accelerator for{" "}
              <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                Globally Impactful Ideas.
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-md">
              We are in the process of creating a studio office with space to accommodate our team and a cohort of 3 startups to ideate, test & delivery with us fall time.
            </p>
            <div className="flex items-center gap-4">
              <Button size="lg">
                Let's Join Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="w-16 h-16 rounded-full border-2 border-muted flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-[300px] aspect-[4/3]">
            <div className="absolute inset-0 grid grid-cols-2 gap-2">
              <div className="relative overflow-hidden rounded-l-xl">
                <Image
                  src="/placeholder.svg?height=225&width=150"
                  alt="Team collaboration 1"
                  width={150}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Team collaboration 2"
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative overflow-hidden col-span-2">
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Office space"
                  width={300}
                  height={150}
                  className="object-cover w-full h-full rounded-b-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                Problem
                <span className="inline-block p-1 bg-purple-100 rounded-lg">
                  <ArrowRight className="h-4 w-4 text-purple-500" />
                </span>
              </h2>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Abstract geometric shape"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground">
                Indosian lacks a specialised Web3 Accelerator to help scale protocols, networks and communities.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">~65</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Only a handful of Web3 Accelerators exist worldwide
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">5,000+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    There is an shortage of Founders across Web3 who are exploring Web3 patterns or are looking to make a move from Web2 to Web3
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Inadequate Community Engagement</h3>
                  <p className="text-sm text-muted-foreground">
                    Only a handful of Web3 Accelerators exist worldwide
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">10</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Indonesia has an extremely limited number of specialised Web3 Accelerators
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Problem illustration 1"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full"
              />
              <h3 className="text-xl font-semibold">Limited Resources</h3>
              <p className="text-muted-foreground">
                Web3 startups often struggle to find the necessary resources and support to scale their projects effectively.
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Problem illustration 2"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full"
              />
              <h3 className="text-xl font-semibold">Lack of Expertise</h3>
              <p className="text-muted-foreground">
                Many founders lack the specialized knowledge required to navigate the complex Web3 landscape.
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Problem illustration 3"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full"
              />
              <h3 className="text-xl font-semibold">Regulatory Challenges</h3>
              <p className="text-muted-foreground">
                The evolving regulatory environment poses significant challenges for Web3 startups, especially in emerging markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

