export interface RadioStation {
  id: number
  title: string
  author: string
  media: string
  type: string
  live: boolean
}

export const radioStations: RadioStation[] = [
  { id: 1, title: "Radio Pulpit", author: "South Africa", media: "https://edge.iono.fm/xice/189_high.aac", type: "audio/aac", live: true },
  { id: 2, title: "Radio Cape Pulpit", author: "South Africa", media: "https://edge.iono.fm/xice/110_high.aac", type: "audio/aac", live: true },
  { id: 3, title: "ClassicFM", author: "South Africa", media: "https://edge.iono.fm/xice/49_high.aac", type: "audio/aac", live: true },
  { id: 4, title: "702", author: "South Africa", media: "https://23543.live.streamtheworld.com/FM702_192AAC.aac", type: "audio/aac", live: true },
  { id: 5, title: "KFM", author: "South Africa", media: "https://27873.live.streamtheworld.com/KFM_192AAC.aac", type: "audio/aac", live: true },
  { id: 6, title: "Cape Talk", author: "South Africa", media: "https://27873.live.streamtheworld.com/CAPE_TALK_192AAC.aac", type: "audio/aac", live: true },
  { id: 7, title: "HeartFM", author: "South Africa", media: "https://iceant.antfarm.co.za/HeartFM.mp3", type: "audio/mpeg", live: true },
  { id: 8, title: "Radio 2000", author: "South Africa", media: "https://28023.live.streamtheworld.com/RADIO2000AAC_SC", type: "audio/aac", live: true },
  { id: 9, title: "JacarandaFM", author: "South Africa", media: "https://live.jacarandafm.com/jacarandahigh.mp3", type: "audio/aac", live: true },
  { id: 10, title: "947", author: "South Africa", media: "https://27943.live.streamtheworld.com/FM947_192AAC.aac", type: "audio/aac", live: true },
  { id: 11, title: "5FM", author: "South Africa", media: "https://25553.live.streamtheworld.com/5FMAAC_SC", type: "audio/aac", live: true },
  { id: 12, title: "MetroFM", author: "South Africa", media: "https://27793.live.streamtheworld.com/METROFMAAC.aac", type: "audio/aac", live: true },
  { id: 13, title: "YFM", author: "South Africa", media: "https://streaming.fabrik.fm/yfm/echocast/audio/index.m3u8", type: "audio/aac", live: true },
  { id: 14, title: "OFM", author: "South Africa", media: "https://edge.iono.fm/xice/ofm_live_high.aac", type: "audio/aac", live: true },
  { id: 15, title: "Radiowave", author: "Namibia", media: "https://edge.iono.fm/xice/194_high.aac", type: "audio/aac", live: true },
  { id: 16, title: "HotFM", author: "South Africa", media: "https://edge.iono.fm/xice/57_high.aac", type: "audio/aac", live: true },
  { id: 17, title: "MixFM", author: "South Africa", media: "https://edge.iono.fm/xice/113_high.aac", type: "audio/aac", live: true },
  { id: 18, title: "Power", author: "South Africa", media: "https://edge.iono.fm/xice/65_high.aac", type: "audio/aac", live: true },
  { id: 19, title: "ECR", author: "South Africa", media: "https://live.ecr.co.za/ecrhigh.mp3", type: "audio/mpeg", live: true },
  { id: 20, title: "CliffCentral", author: "South Africa", media: "https://edge.iono.fm/xice/cliffcentral_live_high.aac", type: "audio/aac", live: true },
  { id: 21, title: "GaySA", author: "South Africa", media: "https://zas1.ndx.co.za:8018/stream", type: "audio/mpeg", live: true },
  { id: 22, title: "KayaFM", author: "South Africa", media: "https://live-kaya.sharp-stream.com/kayahigh.mp3", type: "audio/mpeg", live: true },
  { id: 23, title: "Bosveld Stereo", author: "South Africa", media: "https://iceant.antfarm.co.za/Bosveld", type: "audio/mpeg", live: true },
  { id: 24, title: "LekkerFM", author: "South Africa", media: "https://zas3.ndx.co.za:8002/stream", type: "audio/mpeg", live: true },
  { id: 25, title: "KofsiFM", author: "South Africa", media: "https://edge.iono.fm/xice/87_medium.aac", type: "audio/aac", live: true },
  { id: 26, title: "BMH Radio", author: "South Africa", media: "https://edge.iono.fm/xice/bmh_live_high.aac", type: "audio/aac", live: true },
  { id: 27, title: "MFM", author: "South Africa", media: "https://edge.iono.fm/xice/46_high.aac", type: "audio/aac", live: true },
  { id: 28, title: "REYFM", author: "Germany", media: "https://reyfm.stream37.radiohost.de/reyfm-original_mp3-320", type: "audio/mpeg", live: true },
]
