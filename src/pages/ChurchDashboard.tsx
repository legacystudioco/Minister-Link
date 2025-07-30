// src/pages/ChurchDashboard.tsx
import React from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, MessageSquare, Search, Settings, PlusCircle } from 'lucide-react'

function ChurchDashboard() {
  const { user, signOut } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-primary">Minister Link</h1>
              <Badge variant="secondary">Church</Badge>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Welcome, {user?.full_name}
              </span>
              <Button variant="outline" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </div> {/* close flex justify-between items-center py-4 */}
        </div> {/* close max-w-7xl */}
      </header>
      {/* TODO: Add main dashboard content here */}
    </div>
  );

}

export default ChurchDashboard;