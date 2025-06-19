import { NextRequest, NextResponse } from 'next/server'


export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    // Simple AI logic for repair assistance
    const aiResponse = await generateAiResponse(message)
    
    // Try to extract shop suggestions based on the conversation
    const shopSuggestions = await getSuggestedShops(message)

    return NextResponse.json({
      response: aiResponse,
      shopSuggestions
    })
  } catch (error) {
    console.error('AI Chat Error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
}

async function generateAiResponse(message: string): Promise<string> {
  const lowerMessage = message.toLowerCase()
  
  // Greeting responses
  if (lowerMessage.includes('hallo') || lowerMessage.includes('hi') || lowerMessage.includes('guten tag')) {
    return 'Hallo! Schön, dass Sie da sind. Ich helfe Ihnen gerne bei allen Fragen rund um Reparaturen. Was ist kaputt oder was möchten Sie reparieren lassen?'
  }
  
  // Electronics repair
  if (lowerMessage.includes('handy') || lowerMessage.includes('smartphone') || lowerMessage.includes('display') || lowerMessage.includes('bildschirm')) {
    return 'Ah, ein Smartphone-Problem! Das kommt häufig vor. Bei Display-Schäden oder anderen Handy-Problemen können Sie oft 60-80% gegenüber einem Neukauf sparen. Die Reparatur dauert meist nur 1-2 Stunden. Soll ich Ihnen passende Elektronik-Werkstätten in Zürich zeigen?'
  }
  
  // Laptop/Computer issues
  if (lowerMessage.includes('laptop') || lowerMessage.includes('computer') || lowerMessage.includes('pc')) {
    return 'Computer-Probleme können oft einfacher gelöst werden als gedacht! Häufige Ursachen sind verstaubte Lüfter, volle Festplatten oder veraltete Software. Eine professionelle Diagnose kostet meist nur CHF 50-80. Reparaturen sparen Ihnen oft 70% gegenüber einem Neukauf. Brauchen Sie Empfehlungen für Computer-Spezialisten?'
  }
  
  // Clothing repair
  if (lowerMessage.includes('kleidung') || lowerMessage.includes('jacke') || lowerMessage.includes('hose') || lowerMessage.includes('reissverschluss')) {
    return 'Kleidungsreparaturen sind sehr nachhaltig und oft günstiger als ein Neukauf! Reißverschluss-Reparaturen kosten meist CHF 15-30, Änderungen CHF 20-50. Das spart nicht nur Geld, sondern auch Ressourcen. Möchten Sie Schneider und Änderungsservices in Ihrer Nähe finden?'
  }
  
  // Shoe repair
  if (lowerMessage.includes('schuhe') || lowerMessage.includes('absatz') || lowerMessage.includes('sohle')) {
    return 'Schuhe zu reparieren ist fast immer günstiger als neue zu kaufen! Eine neue Sohle kostet CHF 30-60, Absatz-Reparaturen CHF 20-40. Gute Schuhe können durch Reparaturen oft jahrelang länger getragen werden. Soll ich Ihnen Schuhmacher in Zürich zeigen?'
  }
  
  // Furniture repair
  if (lowerMessage.includes('möbel') || lowerMessage.includes('stuhl') || lowerMessage.includes('tisch') || lowerMessage.includes('schrank')) {
    return 'Möbelreparaturen lohnen sich fast immer! Oft sind es nur kleine Probleme wie lose Schrauben, defekte Scharniere oder Kratzer. Die Reparatur kostet meist einen Bruchteil eines Neukaufs und erhält den Charakter Ihrer Möbel. Brauchen Sie Empfehlungen für Möbel-Reparaturdienste?'
  }
  
  // Bicycle repair
  if (lowerMessage.includes('fahrrad') || lowerMessage.includes('velo') || lowerMessage.includes('bike') || lowerMessage.includes('reifen')) {
    return 'Fahrrad-Reparaturen sind meist schnell und günstig erledigt! Ein Reifenwechsel kostet CHF 15-25, Bremseinstellungen CHF 20-40. Regelmäßige Wartung verlängert die Lebensdauer erheblich. Fahren Sie gerne wieder sicher! Soll ich Ihnen Fahrrad-Werkstätten zeigen?'
  }
  
  // Appliance repair
  if (lowerMessage.includes('kaffeemaschine') || lowerMessage.includes('toaster') || lowerMessage.includes('mixer') || lowerMessage.includes('haushaltsgerät')) {
    return 'Haushaltsgeräte reparieren zu lassen spart oft viel Geld! Eine Kaffeemaschinen-Reparatur kostet meist CHF 80-150 statt CHF 300-800 für ein neues Gerät. Oft sind es nur verstopfte Leitungen oder defekte Dichtungen. Möchten Sie spezialisierte Haushaltsgeräte-Services finden?'
  }
  
  // Price/cost questions
  if (lowerMessage.includes('kosten') || lowerMessage.includes('preis') || lowerMessage.includes('günstig')) {
    return 'Reparaturen kosten meist nur 20-40% eines Neukaufs! Plus Sie erhalten CHF 100 Bonus für jede Reparatur über unsere Plattform. Die meisten Werkstätten bieten kostenlose Kostenvoranschläge. Reparieren ist fast immer die günstigere und umweltfreundlichere Option!'
  }
  
  // Environmental questions
  if (lowerMessage.includes('umwelt') || lowerMessage.includes('nachhaltig') || lowerMessage.includes('co2')) {
    return 'Reparaturen sind super für die Umwelt! Sie sparen durchschnittlich 70% der CO2-Emissionen einer Neuproduktion und reduzieren Elektroschrott. Jede Reparatur bedeutet weniger Rohstoffverbrauch und weniger Abfall. Sie tun also gleich doppelt Gutes: für Ihren Geldbeutel und die Umwelt!'
  }
  
  // Bonus/reward questions
  if (lowerMessage.includes('bonus') || lowerMessage.includes('100') || lowerMessage.includes('belohnung')) {
    return 'Ja, Sie erhalten garantiert CHF 100 Bonus für jede erfolgreich abgeschlossene Reparatur! Das funktioniert so: Nach der Reparatur senden Sie uns die Rechnung, wir verifizieren sie und Sie erhalten Ihren Bonus-Code per E-Mail. Dieser kann bei vielen lokalen Geschäften eingelöst werden.'
  }
  
  // General repair questions
  if (lowerMessage.includes('reparatur') || lowerMessage.includes('kaputt') || lowerMessage.includes('defekt')) {
    return 'Ich helfe Ihnen gerne! Um die beste Beratung zu geben, erzählen Sie mir: Was genau ist kaputt? Welches Gerät/Gegenstand ist betroffen? Haben Sie eine Vorstellung davon, was das Problem sein könnte? Je mehr Details, desto besser kann ich helfen!'
  }
  
  // Thank you
  if (lowerMessage.includes('danke') || lowerMessage.includes('vielen dank')) {
    return 'Gerne geschehen! Ich bin hier, wenn Sie weitere Fragen haben. Denken Sie daran: Reparieren spart Geld, schont die Umwelt und Sie erhalten CHF 100 Bonus. Eine Win-Win-Win Situation! 😊'
  }
  
  // Default response
  return `Interessant! Können Sie mir mehr Details dazu erzählen? Je besser ich Ihr Problem verstehe, desto gezielter kann ich Ihnen helfen. Zum Beispiel:

• Was genau ist kaputt oder funktioniert nicht?
• Seit wann besteht das Problem?
• Haben Sie schon etwas versucht?

Mit diesen Informationen kann ich Ihnen die passendsten Werkstätten empfehlen und Tipps geben, wie Sie bis zu 70% sparen können!`
}

async function getSuggestedShops(message: string) {
  try {
    const lowerMessage = message.toLowerCase()
    let category = null
    
    // Map keywords to shop categories
    if (lowerMessage.includes('handy') || lowerMessage.includes('smartphone') || lowerMessage.includes('laptop') || lowerMessage.includes('computer') || lowerMessage.includes('kaffeemaschine') || lowerMessage.includes('toaster') || lowerMessage.includes('haushaltsgerät') || lowerMessage.includes('elektronik')) {
      category = 'ELECTRONICS'
    } else if (lowerMessage.includes('kleidung') || lowerMessage.includes('jacke') || lowerMessage.includes('hose')) {
      category = 'CLOTHING'
    } else if (lowerMessage.includes('schuhe') || lowerMessage.includes('absatz')) {
      category = 'SHOES'
    }
    
    if (!category) return []
    
    // For demo purposes, return mock data since database might not be working
    // In production, this would query the actual database
    const mockShops = [
      {
        id: 'revamp-it',
        name: 'Revamp-IT',
        category: 'ELECTRONICS',
        address: 'Bahnhofstrasse 45, Zürich'
      },
      {
        id: 'tech-repair-zh',
        name: 'Tech Repair Zürich',
        category: 'ELECTRONICS', 
        address: 'Limmatstrasse 12, Zürich'
      },
      {
        id: 'mobile-fix',
        name: 'Mobile Fix Center',
        category: 'ELECTRONICS',
        address: 'Europaallee 8, Zürich'
      }
    ]
    
    return mockShops
      .filter(shop => shop.category === category)
      .slice(0, 3)
    
  } catch (error) {
    console.error('Error getting shop suggestions:', error)
    return []
  }
} 