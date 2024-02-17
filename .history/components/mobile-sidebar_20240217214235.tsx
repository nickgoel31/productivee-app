"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"


const MobileSidebar = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <div className="p-2">
                <Menu />
            </div>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>

  )
}

export default MobileSidebar


  