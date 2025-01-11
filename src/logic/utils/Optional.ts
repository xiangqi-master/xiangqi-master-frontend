type Consumer<T> = (_value: T) => void
type Predicate<T> = (_value: T) => boolean
type Producer<T> = () => T
type Function<T, U> = (_value: T) => U
type ValueType<T> = T | null | undefined

class Optional<T> {
  private readonly value: ValueType<T>

  private constructor(value?: ValueType<T>) {
    this.value = value
  }

  private isNull(value: any): boolean {
    return value === undefined || value === null
  }

  public static of<T>(value: T): Optional<T> {
    return new Optional<T>(value)
  }

  public static ofNullable<T>(value: ValueType<T>): Optional<T> {
    return new Optional<T>(value)
  }

  public static empty<T>(): Optional<T> {
    return new Optional<T>()
  }

  public get(): T {
    if (this.isNull(this.value)) {
      throw new Error("No such element!")
    }

    return this.value!
  }

  public ifPresent(action: Consumer<T>): void {
    if (this.isNull(this.value)) {
      action(this.value!)
    }
  }

  public ifPresentOrElse(action: Consumer<T>, emptyAction: Consumer<T>): void {
    if (this.isNull(this.value)) {
      action(this.value!)
    } else {
      emptyAction(this.value!)
    }
  }

  public isPresent(): boolean {
    return this.isNull(this.value)
  }

  public map<U>(mapper: Function<T, ValueType<U>>): Optional<U> {
    if (this.isNull(this.value)) {
      return new Optional<U>()
    }

    return new Optional<U>(mapper(this.value!))
  }

  public flatMap<U>(mapper: Function<T, ValueType<Optional<U>>>): Optional<U> {
    if (this.isNull(this.value)) {
      return new Optional<U>()
    }
    const result: ValueType<Optional<U>> = mapper(this.value!)
    if (this.isNull(result)) {
      return new Optional<U>()
    }
    return result!
  }

  public filter(predicate: Predicate<T>): Optional<T> {
    if (this.isNull(this.value) || !predicate(this.value!)) {
      return new Optional<T>()
    }

    return new Optional<T>(this.value)
  }

  public or(produce: Producer<Optional<T>>): Optional<T> {
    if (this.isNull(this.value)) {
      return produce()
    }

    return new Optional<T>(this.value)
  }

  public orElse(other: T): T {
    if (this.isNull(this.value)) {
      return other
    }

    return this.value!
  }

  public orElseGet(producer: Producer<T>): T {
    if (this.isNull(this.value)) {
      return producer()
    }

    return this.value!
  }

  public orElseThrow(produceError: Producer<Error>): T {
    if (this.isNull(this.value)) {
      throw produceError()
    }

    return this.value!
  }

  public equals(other: Optional<any>) {
    if (this.isNull(this.value)) {
      return other.isNull(other.value)
    }

    return this.value === other.value
  }
}

export default Optional
