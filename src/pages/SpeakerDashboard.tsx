// src/pages/SpeakerDashboard.tsx
import React from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, MessageSquare, User, Settings, PlusCircle } from 'lucide-react'

const SpeakerDashboard: React.FC = () => {
  const { user, signOut } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-primary">Minister Link</h1>
              <Badge variant="secondary">Speaker</Badge>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Welcome, {user?.full_name}
              </span>
              <Button variant="outline" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Speaker Dashboard</h2>
          <p className="text-gray-600 mt-2">Manage your speaking engagements and profile</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">Profile Complete</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bookings</CardTitle>
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">This Month</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">Unread</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rating</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">Average Rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Opportunities</CardTitle>
              <CardDescription>
                Latest speaking opportunities that match your profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">Youth Revival Weekend</h4>
                  <p className="text-sm text-muted-foreground">First Baptist Church • March 15-17</p>
                  <Badge variant="outline" className="mt-2">Youth Ministry</Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">Sunday Morning Service</h4>
                  <p className="text-sm text-muted-foreground">Grace Community • March 24</p>
                  <Badge variant="outline" className="mt-2">Sunday Service</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Opportunities
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Engagements</CardTitle>
              <CardDescription>
                Your confirmed speaking engagements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg bg-primary/5">
                  <h4 className="font-semibold">Easter Sunday Service</h4>
                  <p className="text-sm text-muted-foreground">Hope Church • March 31, 10:00 AM</p>
                  <Badge className="mt-2">Confirmed</Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">Men's Conference</h4>
                  <p className="text-sm text-muted-foreground">Victory Chapel • April 14, 7:00 PM</p>
                  <Badge variant="secondary" className="mt-2">Pending</Badge>
                </div>
              </div>
              <Button className="w-full mt-4">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Availability
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default SpeakerDashboard;
