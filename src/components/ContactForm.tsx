import React, { useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [interest, setInterest] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formRef.current) {
      emailjs.sendForm('service_eo4i68e', 'template_fpg464e', formRef.current, 'R9ZW9yL7ykNOmY-8K')
        .then((result) => {
          console.log('Email sent successfully', result.text);
          // Reset form fields
          setName('')
          setPhone('')
          setInterest('')
        }, (error) => {
          console.error('Failed to send email', error);
        });
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          name="phone"
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="interest">Interested In</Label>
        <Select value={interest} onValueChange={setInterest} required>
          <SelectTrigger>
            <SelectValue placeholder="Select your interest" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="accelerator">Petrol pump</SelectItem>
            <SelectItem value="mentorship">Food business</SelectItem>
            <SelectItem value="investment">Software business</SelectItem>
            <SelectItem value="partnership">Partnership</SelectItem>
          </SelectContent>
        </Select>
        <input 
          type="hidden" 
          name="interest" 
          value={interest} 
        />
      </div>
      <Button type="submit" className="w-full">Submit</Button>
    </form>
  )
}