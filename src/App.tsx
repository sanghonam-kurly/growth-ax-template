import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar as KpdsCalendar } from "@/components/ui/calendar";
import { Calendar, CreditCard, Settings, User } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button as KpdsButton, Typography } from "@thefarmersfront/kpds-react";

function App() {
  const [openCommand, setOpenCommand] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenCommand((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="p-10 space-y-8 bg-kpds-gray-50 text-kpds-gray-900">
      <header>
        <h1 className="text-3xl font-bold">KPDS Component Showcase</h1>
        <p className="text-kpds-gray-600">
          Testing components styled with KPDS Design Tokens.
        </p>
      </header>

      {/* Section for KPDS Button */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          KPDS Button (from @thefarmersfront/kpds-react)
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <KpdsButton color="regular">KPDS Regular Button</KpdsButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {/* type, style, color 조합 */}
          <KpdsButton _type="primary" _style="fill" color="regular">
            primary, fill, regular
          </KpdsButton>
          <KpdsButton _type="primary" _style="fill" color="light">
            primary, fill, light
          </KpdsButton>
          <KpdsButton _type="primary" _style="stroke" color="regular">
            primary, stroke, regular
          </KpdsButton>
          <KpdsButton _type="primary" _style="stroke" color="light">
            primary, stroke, light
          </KpdsButton>
          <KpdsButton _type="secondary" _style="fill" color="regular">
            secondary, fill, regular
          </KpdsButton>
          <KpdsButton _type="secondary" _style="stroke" color="regular">
            secondary, stroke, regular
          </KpdsButton>
          <KpdsButton _type="danger" _style="fill" color="regular">
            danger, fill, regular
          </KpdsButton>
          <KpdsButton _type="danger" _style="stroke" color="regular">
            danger, stroke, regular
          </KpdsButton>
          <KpdsButton _type="kakao" _style="fill" color="regular">
            kakao, fill, regular
          </KpdsButton>
          <KpdsButton _type="members" _style="fill" color="regular">
            members, fill, regular
          </KpdsButton>
          {/* size */}
          <KpdsButton _type="primary" size="small">
            size: small
          </KpdsButton>
          <KpdsButton _type="primary" size="medium">
            size: medium
          </KpdsButton>
          <KpdsButton _type="primary" size="large">
            size: large
          </KpdsButton>
          <KpdsButton _type="primary" size="extraLarge">
            size: extraLarge
          </KpdsButton>
          {/* shape */}
          <KpdsButton _type="primary" shape="capsule">
            shape: capsule
          </KpdsButton>
          <KpdsButton _type="primary" shape="square">
            shape: square
          </KpdsButton>
          {/* weight */}
          <KpdsButton _type="primary" weight="regular">
            weight: regular
          </KpdsButton>
          <KpdsButton _type="primary" weight="semibold">
            weight: semibold
          </KpdsButton>
          {/* disabled */}
          <KpdsButton _type="primary" disabled>
            disabled
          </KpdsButton>
          {/* loading (isLoading prop이 없다면, loading 텍스트로 대체) */}
          <KpdsButton _type="primary">loading...</KpdsButton>
        </div>
      </section>

      {/* Section for KPDS Typography */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          KPDS Typography (from @thefarmersfront/kpds-react)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Typography variant="$accessibility4Regular">
            $accessibility4Regular
          </Typography>
          <Typography variant="$accessibility3Regular">
            $accessibility3Regular
          </Typography>
          <Typography variant="$accessibility2Regular">
            $accessibility2Regular
          </Typography>
          <Typography variant="$accessibility1Regular">
            $accessibility1Regular
          </Typography>
          <Typography variant="$xxxlargeRegular">$xxxlargeRegular</Typography>
          <Typography variant="$xxlargeRegular">$xxlargeRegular</Typography>
          <Typography variant="$xlargeRegular">$xlargeRegular</Typography>
          <Typography variant="$largeRegular">$largeRegular</Typography>
          <Typography variant="$mediumRegular">$mediumRegular</Typography>
          <Typography variant="$smallRegular">$smallRegular</Typography>
          <Typography variant="$xsmallRegular">$xsmallRegular</Typography>
          <Typography variant="$accessibility4Semibold">
            $accessibility4Semibold
          </Typography>
          <Typography variant="$accessibility3Semibold">
            $accessibility3Semibold
          </Typography>
          <Typography variant="$accessibility2Semibold">
            $accessibility2Semibold
          </Typography>
          <Typography variant="$accessibility1Semibold">
            $accessibility1Semibold
          </Typography>
          <Typography variant="$xxxlargeSemibold">$xxxlargeSemibold</Typography>
          <Typography variant="$xxlargeSemibold">$xxlargeSemibold</Typography>
          <Typography variant="$xlargeSemibold">$xlargeSemibold</Typography>
          <Typography variant="$largeSemibold">$largeSemibold</Typography>
          <Typography variant="$mediumSemibold">$mediumSemibold</Typography>
          <Typography variant="$smallSemibold">$smallSemibold</Typography>
          <Typography variant="$xsmallSemibold">$xsmallSemibold</Typography>
          <Typography variant="$accessibility4Bold">
            $accessibility4Bold
          </Typography>
          <Typography variant="$accessibility3Bold">
            $accessibility3Bold
          </Typography>
          <Typography variant="$accessibility2Bold">
            $accessibility2Bold
          </Typography>
          <Typography variant="$accessibility1Bold">
            $accessibility1Bold
          </Typography>
          <Typography variant="$xxxlargeBold">$xxxlargeBold</Typography>
          <Typography variant="$xxlargeBold">$xxlargeBold</Typography>
          <Typography variant="$xlargeBold">$xlargeBold</Typography>
          <Typography variant="$largeBold">$largeBold</Typography>
          <Typography variant="$mediumBold">$mediumBold</Typography>
          <Typography variant="$smallBold">$smallBold</Typography>
          <Typography variant="$xsmallBold">$xsmallBold</Typography>
        </div>
      </section>

      {/* Section for Aspect Ratio */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Aspect Ratio</h2>
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9} className="bg-kpds-gray-200 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              className="rounded-md object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </section>

      {/* Section for Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button color="primary" styling="fill">
            Primary Fill
          </Button>
          <Button color="primary" styling="lightFill">
            Primary Light Fill
          </Button>
          <Button color="primary" styling="stroke">
            Primary Stroke
          </Button>
          <Button color="primary" styling="text">
            Primary Text
          </Button>
          <Button color="secondary" styling="fill">
            Secondary Fill
          </Button>
          <Button color="danger" styling="fill">
            Danger Fill
          </Button>
          <Button
            color="primary"
            styling="fill"
            isLoading
            loadingText="Loading..."
          >
            Loading
          </Button>
          <Button color="secondary" styling="stroke" disabled>
            Disabled
          </Button>
        </div>
      </section>

      {/* Section for Badges */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Badge</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge>KPDS Badge</Badge>
        </div>
      </section>

      {/* Section for Alerts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Alert</h2>
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
      </section>

      {/* Section for Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Card</h2>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This is the card content area where you can put any information.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button color="secondary" styling="stroke">
              Cancel
            </Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Section for Interactive Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive Components</h2>
        <div className="flex flex-wrap items-center gap-8">
          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none"
            >
              Accept terms and conditions
            </label>
          </div>
          {/* Avatar */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* Section for Overlays */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overlays & Modals</h2>
        <div className="flex flex-wrap items-center gap-4">
          {/* Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button styling="stroke">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <p>Dialog Content</p>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Alert Dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button color="danger" styling="stroke">
                Show Alert Dialog
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>

      {/* Section for Accordion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Accordion</h2>
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Section for Carousel */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Carousel</h2>
        <Carousel className="w-full max-w-sm mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Section for Calendar */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Calendar</h2>
        <div className="flex justify-center">
          <KpdsCalendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border border-kpds-gray-200"
          />
        </div>
      </section>

      {/* Section for Command Palette */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Command Palette</h2>
        <p className="text-sm text-kpds-gray-600">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-kpds-gray-100 px-1.5 font-mono text-[10px] font-medium text-kpds-gray-600 opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </p>
        <CommandDialog open={openCommand} onOpenChange={setOpenCommand}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </section>
    </div>
  );
}

export default App;
