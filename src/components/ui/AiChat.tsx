'use client'

import { useState, useRef, useEffect } from 'react'
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { SparklesIcon, WrenchScrewdriverIcon, ShirtIcon, HomeIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import { CATEGORY_LABELS, SHOP_CATEGORIES } from '@/lib/constants/categories'

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
  shopSuggestions?: Array<{
    id: string
    name: string
    category: string
    address: string
  }>
  categoryButtons?: boolean
}

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hallo! Was möchten Sie reparieren lassen? Wählen Sie eine Kategorie aus:',
      sender: 'ai',
      timestamp: new Date(),
      categoryButtons: true
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleCategorySelect = async (category: string, categoryLabel: string) => {
    setSelectedCategory(category)
    
    // Add user message showing selected category
    const userMessage: Message = {
      id: Date.now().toString(),
      text: `Ich möchte etwas aus der Kategorie "${categoryLabel}" reparieren lassen.`,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    // Handle "something else" category differently
    if (category === 'OTHER') {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Das ist toll, dass Sie Ihr Gerät reparieren möchten! 🔧 Auch wenn die Stadt Zürich für diese Kategorie aktuell keinen Reparaturbonus anbietet, gibt es bestimmt Werkstätten in Ihrer Nähe, die Ihnen helfen können. Reparieren ist immer besser als wegwerfen - Sie schonen damit die Umwelt und sparen Geld! Beschreiben Sie mir gerne, was kaputt ist, und ich kann Ihnen Tipps geben oder allgemeine Werkstätten empfehlen.',
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
      return
    }

    // For bonus-eligible categories, proceed with AI chat
    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Ich möchte etwas aus der Kategorie ${categoryLabel} reparieren lassen.`,
          conversationHistory: messages,
          category: category
        }),
      })

      if (!response.ok) throw new Error('Failed to get AI response')

      const data = await response.json()

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'ai',
        timestamp: new Date(),
        shopSuggestions: data.shopSuggestions
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Entschuldigung, es gab ein Problem mit meiner Antwort. Bitte versuchen Sie es erneut.',
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputText,
          conversationHistory: messages,
          category: selectedCategory
        }),
      })

      if (!response.ok) throw new Error('Failed to get AI response')

      const data = await response.json()

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'ai',
        timestamp: new Date(),
        shopSuggestions: data.shopSuggestions
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Entschuldigung, es gab ein Problem mit meiner Antwort. Bitte versuchen Sie es erneut.',
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('de-DE', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case SHOP_CATEGORIES.ELECTRONICS:
        return <WrenchScrewdriverIcon className="h-5 w-5" />
      case SHOP_CATEGORIES.CLOTHING:
        return <ShirtIcon className="h-5 w-5" />
      case SHOP_CATEGORIES.SHOES:
        return <HomeIcon className="h-5 w-5" />
      case 'OTHER':
        return <QuestionMarkCircleIcon className="h-5 w-5" />
      default:
        return <WrenchScrewdriverIcon className="h-5 w-5" />
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-200 z-50 group"
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
          <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Fragen Sie unseren AI-Assistenten
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-indigo-100 rounded-full">
                <SparklesIcon className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Reparatur-Assistent</h3>
                <p className="text-xs text-green-600">● Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XMarkIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs rounded-2xl px-4 py-2 ${
                  message.sender === 'user' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  
                  {/* Category Selection Buttons */}
                  {message.categoryButtons && (
                    <div className="mt-3 space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleCategorySelect(SHOP_CATEGORIES.ELECTRONICS, CATEGORY_LABELS[SHOP_CATEGORIES.ELECTRONICS])}
                          className="flex items-center space-x-2 p-2 bg-white border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors text-left"
                        >
                          {getCategoryIcon(SHOP_CATEGORIES.ELECTRONICS)}
                          <span className="text-xs font-medium text-gray-900">{CATEGORY_LABELS[SHOP_CATEGORIES.ELECTRONICS]}</span>
                        </button>
                        <button
                          onClick={() => handleCategorySelect(SHOP_CATEGORIES.CLOTHING, CATEGORY_LABELS[SHOP_CATEGORIES.CLOTHING])}
                          className="flex items-center space-x-2 p-2 bg-white border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors text-left"
                        >
                          {getCategoryIcon(SHOP_CATEGORIES.CLOTHING)}
                          <span className="text-xs font-medium text-gray-900">{CATEGORY_LABELS[SHOP_CATEGORIES.CLOTHING]}</span>
                        </button>
                        <button
                          onClick={() => handleCategorySelect(SHOP_CATEGORIES.SHOES, CATEGORY_LABELS[SHOP_CATEGORIES.SHOES])}
                          className="flex items-center space-x-2 p-2 bg-white border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors text-left"
                        >
                          {getCategoryIcon(SHOP_CATEGORIES.SHOES)}
                          <span className="text-xs font-medium text-gray-900">{CATEGORY_LABELS[SHOP_CATEGORIES.SHOES]}</span>
                        </button>
                        <button
                          onClick={() => handleCategorySelect('OTHER', 'Etwas anderes')}
                          className="flex items-center space-x-2 p-2 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-left"
                        >
                          {getCategoryIcon('OTHER')}
                          <span className="text-xs font-medium text-gray-600">Etwas anderes</span>
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        💡 Tipp: Für Elektro, Kleidung und Schuhe gibt es Reparaturbonus!
                      </p>
                    </div>
                  )}
                  
                  {/* Shop Suggestions */}
                  {message.shopSuggestions && message.shopSuggestions.length > 0 && (
                    <div className="mt-3 space-y-2">
                      <p className="text-xs font-medium">Empfohlene Werkstätten:</p>
                      {message.shopSuggestions.map((shop) => (
                        <div key={shop.id} className="bg-white rounded-lg p-2 border border-gray-200">
                          <h4 className="font-medium text-gray-900 text-xs">{shop.name}</h4>
                          <p className="text-xs text-gray-600">{shop.category} • {shop.address}</p>
                          <button 
                            onClick={() => window.open(`/shops?search=${shop.name}`, '_blank')}
                            className="text-xs text-indigo-600 hover:text-indigo-800 mt-1"
                          >
                            Details anzeigen →
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <p className="text-xs opacity-70 mt-1">{formatTime(message.timestamp)}</p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 rounded-2xl px-4 py-2 max-w-xs">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ihre Frage hier eingeben..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <PaperAirplaneIcon className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by AI • Kostenlose Beratung
            </p>
          </div>
        </div>
      )}
    </>
  )
} 