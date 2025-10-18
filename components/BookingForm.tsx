"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "./ui/textarea";
import { PhoneInput } from "./ui/phone-input";

interface FormData {
  name: string;
  phone: string;
  rooms: string;
  ownSupplies: boolean;
  numberOfPeople: string;
  additionalInfo?: string;
}

const BookingForm = () => {
  const t = useTranslations("bookingForm");
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    rooms: "",
    ownSupplies: false,
    numberOfPeople: "",
    additionalInfo: "",
  });

  const totalSteps = 6;

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t("successMessage"));
        setFormData({
          name: "",
          phone: "",
          rooms: "",
          ownSupplies: false,
          numberOfPeople: "",
          additionalInfo: "",
        });
        setStep(1);
      } else {
        toast.error(t("errorMessage"));
      }
    } catch (error) {
      toast.error(t("errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.trim().length > 0;
      case 2:
        return formData.phone.trim().length > 0;
      case 3:
        return formData.rooms.trim().length > 0 && parseInt(formData.rooms) > 0;
      case 4:
        return true;
      case 5:
        return (
          formData.numberOfPeople.trim().length > 0 &&
          parseInt(formData.numberOfPeople) > 0
        );
      case 6:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className='glass-card p-4 sm:p-8 rounded-2xl max-w-md mx-auto'>
      <div className='mb-6'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-2xl font-bold'>{t("title")}</h3>
          <span className='text-nowrap text-sm text-muted-foreground'>
            {step} / {totalSteps}
          </span>
        </div>
        <div className='w-full bg-muted rounded-full h-2'>
          <div
            className='bg-primary h-2 rounded-full transition-all duration-300'
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <div className='min-h-[200px]'>
        {step === 1 && (
          <div className='space-y-4'>
            <Label htmlFor='name'>{t("nameLabel")}</Label>
            <Input
              id='name'
              type='text'
              placeholder={t("namePlaceholder")}
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
              className='w-full'
            />
          </div>
        )}

        {step === 2 && (
          <div className='space-y-4'>
            <Label htmlFor='phone'>{t("phoneLabel")}</Label>
            <PhoneInput
              defaultCountry='UZ' // Default: "UZ" (Uzbekistan)
              onChange={(e) => updateFormData("phone", e)}
              value={formData.phone}
            />
          </div>
        )}

        {step === 3 && (
          <div className='space-y-4'>
            <Label htmlFor='rooms'>{t("roomsLabel")}</Label>
            <Input
              id='rooms'
              type='number'
              min='1'
              placeholder={t("roomsPlaceholder")}
              value={formData.rooms}
              onChange={(e) => updateFormData("rooms", e.target.value)}
              className='w-full'
            />
          </div>
        )}

        {step === 4 && (
          <div className='space-y-4'>
            <Label>{t("suppliesLabel")}</Label>
            <div className='flex items-center space-x-2 p-4 border rounded-lg'>
              <Checkbox
                id='ownSupplies'
                checked={formData.ownSupplies}
                onCheckedChange={(checked) =>
                  updateFormData("ownSupplies", checked === true)
                }
              />
              <label
                htmlFor='ownSupplies'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer'>
                {t("suppliesCheckbox")}
              </label>
            </div>
            <p className='text-sm text-muted-foreground'>
              {formData.ownSupplies ? t("suppliesOwn") : t("suppliesOurs")}
            </p>
          </div>
        )}

        {step === 5 && (
          <div className='space-y-4'>
            <Label htmlFor='numberOfPeople'>{t("peopleLabel")}</Label>
            <Input
              id='numberOfPeople'
              type='number'
              placeholder={t("peoplePlaceholder")}
              value={formData.numberOfPeople}
              onChange={(e) => updateFormData("numberOfPeople", e.target.value)}
            />
          </div>
        )}
        {step === 6 && (
          <div className='space-y-4'>
            <Label htmlFor='additionalInfo'>{t("additionalInfoLabel")}</Label>
            <Textarea
              id='additionalInfo'
              placeholder={t("additionalInfoPlaceholder")}
              className='w-full'
              onChange={(e) => updateFormData("additionalInfo", e.target.value)}
              value={formData.additionalInfo}
            />
          </div>
        )}
      </div>

      <div className='flex justify-between mt-8'>
        <Button
          variant='outline'
          onClick={prevStep}
          disabled={step === 1}
          className='flex items-center gap-2'>
          <ChevronLeft className='w-4 h-4' />
          {t("back")}
        </Button>

        {step < totalSteps ? (
          <Button
            variant='hero'
            onClick={nextStep}
            disabled={!isStepValid()}
            className='flex items-center gap-2'>
            {t("next")}
            <ChevronRight className='w-4 h-4' />
          </Button>
        ) : (
          <Button
            variant='hero'
            onClick={handleSubmit}
            disabled={!isStepValid() || isSubmitting}
            className='flex items-center gap-2'>
            {isSubmitting ? (
              <>
                <Loader2 className='w-4 h-4 animate-spin' />
                {t("sending")}
              </>
            ) : (
              <>
                <Send className='w-4 h-4' />
                {t("submit")}
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
