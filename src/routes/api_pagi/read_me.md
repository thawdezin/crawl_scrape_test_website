# Default ဝင်ကြည့် (page=1, limit=10)
curl http://localhost:5173/api_pagi

# Explicit params ဖြင့် (page 1, limit 10)
curl "http://localhost:5173/api_pagi?page=1&limit=10"

# page 2, limit 5 စမ်းမယ်ဆို
curl "http://localhost:5173/api_pagi?page=2&limit=5"

# Verbose output နဲ့ headers နှင့် status code တွေလည်း မြင်ချင်ရင်
curl -v "http://localhost:5173/api_pagi?page=1&limit=10"
