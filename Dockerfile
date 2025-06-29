# Stage 1: Build the Go binary
FROM golang:1.22 as builder

WORKDIR /app

COPY backend/go.mod backend/go.sum ./
RUN go mod download

COPY backend/ .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build -o main .

# Stage 2: Lightweight image using Alpine (small + compatible)
FROM alpine:latest

WORKDIR /app

# Install necessary certificates
RUN apk add --no-cache ca-certificates

COPY --from=builder /app/main .

EXPOSE 5000

CMD ["./main"]
