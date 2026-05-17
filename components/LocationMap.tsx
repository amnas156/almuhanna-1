import { MapPin } from "lucide-react";

import { officeLocation } from "@/data/location";

type LocationMapProps = {
  minHeightClassName?: string;
};

export default function LocationMap({
  minHeightClassName = "min-h-[380px] sm:min-h-[500px]",
}: LocationMapProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/80 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl sm:rounded-[40px]">
      <div className={`relative h-full ${minHeightClassName}`}>
        <iframe
          src={officeLocation.mapEmbedUrl}
          width="100%"
          height="100%"
          loading="lazy"
          title={`${officeLocation.title} location map`}
          className="absolute inset-0 h-full w-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>
    </div>
  );
}
